<script setup lang="ts">
import InlineTextField from "~/src/2_view/apply-form/0_components/InlineTextField.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";
import {
  type ApplyFormModelBase,
  createApplyFormModel, type DropDownFormModel,
} from "~/src/0_models/ApplyFormModel";
import {FormService} from "~/src/1_service/AirtableService";
import {Airtable_Select_EMR, Airtable_Select_연락수단} from "~/src/0_models/types/AirtableType";
import DropdownField from "~/src/2_view/apply-form/0_components/DropdownField.vue";
import MultilineTextField from "~/src/2_view/apply-form/0_components/MultilineTextField.vue";
import {definePageMeta} from "#imports";
import ASpin from "ant-design-vue/es/spin";

definePageMeta({
  title: '아임파인 일만사업 도입 신청서',
  meta: [
    {
      name: 'description',
      content: '도입 신청서\n' +
          '\n' +
          '소중한 시간 내어주셔서 감사합니다. 저희와 함께하시면 어려울게 없습니다.\n' +
          '영업일 기준 1일내 응답 드리겠습니다.'
    }
  ]
});

useHead({
      title: '아임파인 일만사업 도입 신청서',
      meta: [
        {
          name: 'description',
          content: '도입 신청서\n' +
              '\n' +
              '소중한 시간 내어주셔서 감사합니다. 저희와 함께하시면 어려울게 없습니다.\n' +
              '영업일 기준 1일내 응답 드리겠습니다.'
        }
      ]
    }
)

const forms: ApplyFormModelBase[] = [
  createApplyFormModel(
      {
        fieldName: 'name',
        title: '성함',
        hintText: '성함을 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'hosName',
        title: '의원명',
        hintText: '의원명을 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'region',
        title: '지역명',
        hintText: '예시) 서울시 강남구',
        required: true,
      },
  ),

  createApplyFormModel(
      {
        fieldName: 'phone',
        title: '연락처',
        hintText: '연락처를 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'emr',
        title: '사용중인 전자차트(EMR)',
        description: '사용중인 전자차트를 선택해주세요',
        required: true,
        type: 'drop-down',
        formObject: {
          options: Airtable_Select_EMR,
        }
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'contactMethod',
        title: '연락받으실 수단',
        description: '현재 [ 연락처로 전화받기 ]로 설정되어 있습니다.\n' +
            '\n' +
            '채널을 통해 텍스트로 안내받기 원하신다면 수단을 변경해주세요.',
        required: false,
        type: 'drop-down',
        initialValue: Airtable_Select_연락수단[0],
        formObject: {
          options: Airtable_Select_연락수단,
        }
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'question',
        title: '궁금한 점',
        hintText: '어떤 것이든 궁금한 것이 있으면 입력해주세요.',
        required: false,
        type: 'multi-line',
      },
  ),
]

const etcForm: ApplyFormModelBase =
    createApplyFormModel(
        {
          fieldName: 'etcEmr',
          title: '기타 전차차트(EMR)',
          hintText: '기타 전자차트를 입력해주세요',
          required: false,
        },
    )


const refValue: Record<string, Ref<string, string>> = forms.reduce((acc, form) => {
  acc[form.fieldName] = ref<string>(form.initialValue || ''); // fieldName을 키로, 초기값 '' 설정
  return acc;
}, {} as Record<string, Ref<string, string>>);

refValue.etcEmr = ref<string>('');

const showEtcInlineTextEmr = ref<boolean>(false);

watch(
    () => refValue.emr.value,
    (newValue) => {
      showEtcInlineTextEmr.value = newValue === '기타';
    }
)

const reset = () => {
  for (const form of forms) {
    if (form.fieldName === 'contactMethod') {
      refValue[form.fieldName].value = Airtable_Select_연락수단[0];
    } else {
      refValue[form.fieldName].value = '';
    }
  }
};

const submit = () => {
  const isAllValid = checkAll();
  if (!isAllValid) return;
  submitForm();
};

const checkAll = () => {
  for (const form of forms) {
    if (!checkRequired(form)) {
      return false;
    }
  }
  return true
};

const checkRequired = (form: ApplyFormModelBase) => {
  if (form.required && refValue[form.fieldName].value === '') {
    alert(`${form.title}을 입력해주세요`);
    return false;
  }
  return true;
};

const formService = new FormService();

const makeAirtableRecord = () => {
  return {
    fields: {
      문의자: refValue.name.value,
      의원명: refValue.hosName.value,
      지역명: refValue.region.value,
      전화번호: refValue.phone.value,
      사용중인EMR: refValue.emr.value,
      기타EMR: refValue.etcEmr.value,
      연락수단: refValue.contactMethod.value,
      기타: refValue.question.value,
    }
  }
}

const submitForm = async () => {
  const record = makeAirtableRecord();
  isLoading.value = true;
  try {
    const response = await formService.submitFormData(record.fields);
    console.log(response);
    if (response) {
      alert('제출이 완료되었습니다.');
      reset();
    } else {
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    }
  } catch (e) {
    alert('제출에 실패했습니다. 다시 시도해주세요.');
  } finally {
    isLoading.value = false;

  }

}

const isLoading = ref<boolean>(false);

</script>

<template>
  <div v-if="isLoading" class="loading-overlay">
    <ASpin size="large" tip="로딩 중..."/>
  </div>

  <div class="layout">
    <div class="content">
      <div class="text-container">
        <p class="text-h1 spb-16">
          도입 신청서
        </p>
        <p class="text-body1 text-tertiary line-height-24 spb-36">
          소중한 시간 내어주셔서 감사합니다. 저희와 함께하시면 어려울게 없습니다.<br>
          영업일 기준 1일내 응답 드리겠습니다.
        </p>
      </div>
      <div class="dv-hori-1 spb-36">

      </div>
      <div class="form-container">
        <client-only>
          <InlineTextField
              :title="forms[0].title"
              :description="forms[0].description || ''"
              :is-important="forms[0].required || false"
              :placeholder="forms[0].hintText"
              v-model="refValue[forms[0].fieldName].value"
          />
          <InlineTextField
              :title="forms[1].title"
              :description="forms[1].description || ''"
              :is-important="forms[1].required || false"
              :placeholder="forms[1].hintText"
              v-model="refValue[forms[1].fieldName].value"
          />
          <InlineTextField
              :title="forms[2].title"
              :description="forms[2].description || ''"
              :is-important="forms[2].required || false"
              :placeholder="forms[2].hintText"
              v-model="refValue[forms[2].fieldName].value"
          />
          <InlineTextField
              :title="forms[3].title"
              :description="forms[3].description || ''"
              :is-important="forms[3].required || false"
              :placeholder="forms[3].hintText"
              v-model="refValue[forms[3].fieldName].value"
          />
          <DropdownField
              :title="forms[4].title"
              :description="forms[4].description || ''"
              :is-required="forms[4].required || false"
              :options="(forms[4] as DropDownFormModel).formObject.options"
              v-model="refValue[forms[4].fieldName].value"
          />
          <InlineTextField
              v-if="showEtcInlineTextEmr"
              :title="etcForm.title"
              :description="etcForm.description || ''"
              :is-important="etcForm.required || false"
              :placeholder="etcForm.hintText"
              v-model="refValue[etcForm.fieldName].value"
          />
          <DropdownField
              :title="forms[5].title"
              :description="forms[5].description || ''"
              :is-required="forms[5].required || false"
              :options="(forms[5] as DropDownFormModel).formObject.options"
              v-model="refValue[forms[5].fieldName].value"
          />
          <MultilineTextField
              :title="forms[6].title"
              :placeholder="forms[6].hintText"
              :is-required="forms[6].required || false"
              v-model="refValue[forms[6].fieldName].value"
          />
        </client-only>
      </div>
      <div class="spb-24"/>
      <div class="button-container">
        <SolidButton preset="blue" text="제출하기" @click="submit"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* 불투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 화면 상단에 표시 */
  pointer-events: all; /* 클릭 차단 */
}

.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  width: 100%;
  padding-top: 80px;
  padding-bottom: 148px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--desktop-max-width);
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  white-space: pre-line;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  .layout {
    padding-inline: var(--spacing-16);

    padding-top: 40px;
    padding-bottom: 60px;
  }

  .form-container {
    gap: 20px;
  }
}
</style>