<template>
  <v-app :dark="dark" >
    <v-toolbar fixed app>
      <!-- <v-icon>build</v-icon> -->
      <img :src="'./favicon.png'" alt="MashinMan"  width="40" />
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="aboutModal=true">
        <v-icon>info</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-dialog v-model="aboutModal" max-width="500px">
      <v-card>
        <v-card-title>
          <span>درباره برنامه</span>
          <v-spacer></v-spacer>
          <v-btn color="danger" flat @click.stop="aboutModal=false">
            <v-icon>close</v-icon> بستن
          </v-btn>
        </v-card-title>
        <v-card-text>
          <p>ماشین‌من - سیستم عیب‌یابی خودرو</p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="orange" flat href="https://github.com/meyt/mashinman">
            <v-icon>link</v-icon>&nbsp; گیت‌هاب
          </v-btn>

          <!-- <v-btn color="orange" flat href="https://meyt.github.io/mashinman">
            <v-icon>link</v-icon>&nbsp; نسخه آنلاین
          </v-btn>
          <v-btn color="orange" flat href="https://myket.ir/org.mashinman">
            <v-icon>link</v-icon>&nbsp; اپلیکیشن اندروید 
          </v-btn> -->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        dark: true,
        aboutModal: false,
        title: 'ماشین‌من'
      }
    }
  }
</script>
