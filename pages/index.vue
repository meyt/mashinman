<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img :src="'./favicon.png'" alt="MashinMan"  width="100"/>
      </div>
      <v-card class="mt-3">
        <v-card-title class="headline text-xs-center">ماشین من - سیستم عیب یابی و تعمیر خودرو</v-card-title>
        <v-card-text>
          <p>این برنامه با استفاده از پرسش و پاسخ‌، می‌تواند شما را در عیب‌یابی و تعمیر خودرو یاری دهد.</p>
        </v-card-text>
        <v-card-actions>
          <v-btn flat color="orange" to="/browse">
            بزن بریم
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
