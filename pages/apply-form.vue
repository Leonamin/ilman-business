<script setup lang="ts">
import InlineTextField from "~/src/2_view/apply-form/0_components/InlineTextField.vue";
import SolidButton from "~/src/2_view/0_components/button/SolidButton.vue";
import {type ApplyFormModel, createApplyFormModel} from "~/src/0_models/ApplyFormModel";
import {useDebounce} from "~/src/composables/useDebounce";
import {FormService} from "~/src/1_service/AirtableService";

const forms = [
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
        description: '사용중인 EMR을 입력해주세요',
        required: true,
      },
  ),
  createApplyFormModel(
      {
        fieldName: 'contactMethod',
        title: '연락받으실 수단',
        description: '연락받으실 수단을 선택해주세요',
        required: true,
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
  acc[form.fieldName] = ref<string>(''); // fieldName을 키로, 초기값 '' 설정
  return acc;
}, {} as Record<string, Ref<string, string>>);

const reset = () => {
  for (const form of forms) {
    refValue[form.fieldName].value = '';
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

const checkRequired = (form: ApplyFormModel)  => {
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
    <p class="text-h1 spb-64 spt-16">
      아임파인 일만사업 솔루션 도입 신청서
    </p>
    <p class="text-body1 text-tertiary">
      소중한 시간 내어주셔서 감사합니다.



      저희와 함께하시면 어려울게 없습니다.

      영업일 기준 1일내 응답 드리겠습니다.
    </p>
    <div class="spb-64"/>
    <div class="form-container">
      <InlineTextField
          v-for="form in forms"
          :key="form.fieldName"
          :title="form.title"
          :description="form.description || ''"
          :is-important="form.required || false"
          v-model="refValue[form.fieldName].value"
      />
    </div>
    <div class="spb-24"/>
    <div class="button-container">
      <SolidButton preset="blueOutline" text="초기화" @click="reset"/>
      <SolidButton preset="blue" text="제출" @click="submit"/>
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

.form-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.button-container {
  display: flex;
  gap: 16px;
}

@media (max-width: 768px) {
  .layout {
    max-width: 90%;
    padding-inline: var(--spacing-16);
  }
}
</style>