<script setup lang="ts">

import type {InterviewModel} from "~/src/0_models/InterviewModel";
import InterviewCard from "~/src/2_view/introduction/0_components/InterviewCard.vue";
import {Direction} from "~/src/0_models/types/Direction";

const interviews: InterviewModel[] = [
  {
    hospital: "서울 D의원",
    title: "아임파인을 통해서\n누락된 수가매출을 찾아서 행복합니다.",
    description: "3차에서 4차 시범사업으로 바뀌면서 \n" +
        "만관제 사업에 손을 놓을 수 밖에 없었습니다. \n" +
        "심평원으로 시스템이 바뀌면서 정말로 관리가 쉽지 않았어요.\n" +
        "어느 정도 관리가 안되었겠거니 생각했는데, \n" +
        "아임파인 만관제에서 청구가능 수가내역을 찾아서 \n" +
        "알려줬을 때 정말 깜짝 놀랐습니다.",
    imageSrc: "/images/background/interview/image_bg_interview_1.png"
  },
  {
    hospital: "경기 Y의원",
    title: "생각보다 환자관리 \n" +
        "문자 회수율이 높아서 놀랐습니다",
    description: "환자들 이름을 바꿔가면서 혈압 및 당수치를 \n" +
        "보내달라고 하는 것이 정말 일이에요. \n" +
        "아임파인 만관제 서비스에서는 제가 신경쓰지 않아도 \n" +
        "리스트에서 자동으로 환자관리 메시지를 카톡으로 보내주고, \n" +
        "응답결과도 보내주니 정말 시간이 너무 많이 절약되었어요. \n" +
        "그리고 생각보다는 응답률이 높아서 거듭해서 메시지를 바꿔가며 보내면 \n" +
        "충분히 환자관리를 할 수 있다는 자신감이 생겼습니다.",
    imageSrc: "/images/background/interview/image_bg_interview_2.png"
  },
  {
    hospital: "서울 S의원",
    title: "저는 진료만 보는데 \n" +
        "아임파인 알아서 매출을 내주더라구요",
    description: "원장님들이라면 다 공감하시겠지만, \n" +
        "EMR 보면서 환자 처방하고, 교육상담하기도 버거운데, \n" +
        "공단이나 심평원 사이트에 무언가 잔뜩 입력하는 것이 너무 어려워요. \n" +
        "일단 화면이 익숙하지 않으니까 처음에 시작하기가 겁이 나더라구요. \n" +
        "그런데 아임파인 만관제 서비스를 도입하고 나니 \n" +
        "이런 문제가 깔끔하게 없어졌어요.",
    imageSrc: "/images/background/interview/image_bg_interview_3.png",
  }

]

</script>

<template>
  <div class="layout">
    <div class="content">
      <InterviewCard
          v-for="(interview, index) in interviews"
          :key="index"
          :interview="interview"
          :direction="index % 2 === 0 ? Direction.Right : Direction.Left"
      />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: var(--desktop-max-width);
  padding: var(--desktop-section-spacing) 0;
  gap: 400px;
}

@media (max-width: 768px) {
  .content {
    padding: var(--mobile-section-spacing) 0;
    gap: 40px;
  }
}

</style>