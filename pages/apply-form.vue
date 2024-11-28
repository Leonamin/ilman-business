<script setup lang="ts">
import InlineTextField from "~/src/2_view/apply-form/0_components/InlineTextField.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";
import {
  type ApplyFormModel,
  type ApplyFormModelBase,
  createApplyFormModel, type DropDownFormModel,
  type TextFormModel
} from "~/src/0_models/ApplyFormModel";
import {useDebounce} from "~/src/composables/useDebounce";
import {FormService} from "~/src/1_service/AirtableService";
import {Airtable_Select_EMR, Airtable_Select_연락수단} from "~/src/0_models/types/AirtableType";
import DropdownField from "~/src/2_view/apply-form/0_components/DropdownField.vue";

const forms: ApplyFormModelBase[] = [
  createApplyFormModel(
      {
        fieldName: 'name',
        title: '성함',
        description: '성함을 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'hosName',
        title: '의원명',
        description: '의원명을 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'region',
        title: '지역명',
        description: '지역명을 입력해주세요',
        required: true,
      },
  ),

  createApplyFormModel(
      {
        fieldName: 'phone',
        title: '전화번호',
        description: '전화번호를 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'emr',
        title: '사용중인 EMR',
        description: '사용중인 EMR을 선택해주세요',
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
        description: '궁금한 점을 입력해주세요',
        required: false,
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
  useDebounce(() => {
    const isAllValid = checkAll();
    if (!isAllValid) return;
    submitForm();
  }, 300);
};

const checkAll = () => {
  let isAllValid = true;
  for (const form of forms) {
    isAllValid = checkRequired(form) && isAllValid;
    if (!isAllValid) {
      break;
    }
  }
  return isAllValid;
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
  const response = await formService.submitFormData(record.fields);
  console.log(response);
  if (response) {
    alert('제출이 완료되었습니다.');
    reset();
  } else {
    alert('제출에 실패했습니다. 다시 시도해주세요.');
  }
}

</script>

<template>
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
      </div>


    </div>
    <div class="spb-24"/>
    <div class="button-container">
      <SolidButton preset="blue" text="제출하기" @click="submit"/>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--color-bg-primary);
  scroll-behavior: smooth;
  max-width: 70%;
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