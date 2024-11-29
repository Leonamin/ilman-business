<script setup lang="ts">
import InlineTextField from "~/src/2_view/apply-form/0_components/InlineTextField.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";
import {
  type ApplyFormModelBase,
  createApplyFormModel,
} from "~/src/0_models/ApplyFormModel";
import {FormService} from "~/src/1_service/AirtableService";
import {Airtable_Select_EMR, Airtable_Select_연락수단} from "~/src/0_models/types/AirtableType";
import DropdownField from "~/src/2_view/apply-form/0_components/DropdownField.vue";
import MultilineTextField from "~/src/2_view/apply-form/0_components/MultilineTextField.vue";

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
        hintText: '지역명을 입력해주세요',
        required: true,
      },
  ),

  createApplyFormModel(
      {
        fieldName: 'phone',
        title: '전화번호',
        hintText: '전화번호를 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'emr',
        title: '사용중인 EMR',
        description: '사용중인 EMR을 선택해주세요\n\n지원가능 EMR: 의사랑, 닥터비트, 다솜 메디케어, 이지스, 전능 IT\n지원불가능: 아담스NC, 병원과컴퓨터\n\n아임파인은 계속발전해나가고 있으며 추후 지원 가능한 EMR이 추가될 예정입니다.',
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
        description: '연락받으실 수단을 선택해주세요',
        required: false,
        initialValue: Airtable_Select_연락수단[0],
        type: 'drop-down',
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

const refValue: Record<string, Ref<string, string>> = forms.reduce((acc, form) => {
  acc[form.fieldName] = ref<string>(form.initialValue || ''); // fieldName을 키로, 초기값 '' 설정
  return acc;
}, {} as Record<string, Ref<string, string>>);

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
      연락수단: refValue.contactMethod.value,
      기타: refValue.question.value,
    }
  }
}

const submitForm = async () => {
  const record = makeAirtableRecord();
  isLoading.value = true;
  const response = await formService.submitFormData(record.fields);
  console.log(response);
  if (response) {
    alert('제출이 완료되었습니다.');
    reset();
  } else {
    alert('제출에 실패했습니다. 다시 시도해주세요.');
  }
  isLoading.value = false;
}

const isLoading = ref<boolean>(false);

</script>

<template>
  <div v-if="isLoading" class="loading-overlay">
    <a-spin size="large" tip="로딩 중..."/>
  </div>

  <div class="layout">
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
      <div
          v-for="form in forms"
          :key="form.fieldName"
      >
        <InlineTextField
            v-if="form.type === 'text'"
            :title="form.title"
            :description="form.description || ''"
            :placeholder="form.hintText"
            :is-important="form.required || false"
            v-model="refValue[form.fieldName].value"
        />
        <DropdownField
            v-if="form.type === 'drop-down'"
            :title="form.title"
            :description="form.description || ''"
            :is-required="form.required || false"
            :options="form.formObject.options"
            v-model="refValue[form.fieldName].value"
        />
        <MultilineTextField
            v-if="form.type === 'multi-line'"
            :title="form.title"
            :placeholder="form.hintText"
            :is-required="form.required || false"
            v-model="refValue[form.fieldName].value"
        />
      </div>


    </div>
    <div class="spb-24"/>
    <div class="button-container">
      <SolidButton preset="blue" text="제출하기" @click="submit"/>
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
  background-color: var(--color-bg-primary);
  scroll-behavior: smooth;
  max-width: var(--desktop-max-width);
  margin: 0 auto;
  padding: 128px 0;
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
  gap: 16px;
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
    max-width: 90%;
    padding-inline: var(--spacing-16);
  }
}
</style>