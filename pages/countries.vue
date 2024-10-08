<template>
  
    <div class="px-4 sm:px-6 lg:px-8">

        <v-data-table :headers="headers" :search="search" :items="countries" :items-per-page="25" class="elevation-1">

            <template v-slot:top>
          <v-toolbar flat>
           
            <v-row>
              <v-col class="order-12 order-md-2 ml-auto" cols="12" sm="12" md="6">
                <v-text-field
                  pattern="[a-zA-Z\s&\d]"
                  v-model.trim="search"
                  append-icon="mdi-magnify"
                
                  hide-details
                  dense
                  single-line
                  outlined
                ></v-text-field>
              </v-col>
              
            </v-row>
          </v-toolbar>
        </template>
            <template v-slot:[`item.flags.png`]="{ item }">
                <v-avatar size="36px">
                    <v-img cover alt="Avatar" :src="item.flags.png"></v-img>

                </v-avatar>

            </template>
            <template v-slot:[`item.altSpellings`]="{ item }">
                <v-chip v-for="spelling in item.altSpellings" :key="spelling" class="ma-2" color="green" outlined>
                    {{ spelling }}
                </v-chip>

            </template>
        </v-data-table>

    </div>
</template>


<script setup>

import {ref} from 'vue';
const { data } = await useFetch("https://restcountries.com/v3.1/all");
const countries = data.value || [];
const search = ref();
const headers = ref([
    {
        text: 'Image',
        value: 'flags.png',

    },
    { text: 'Official', value: 'name.official' ,sortable: true},
    { text: 'Code2', value: 'cca2' },
    { text: 'Code3', value: 'cca3' },
    { text: 'Name', value: 'name.common' ,align: 'start',
    sortable: true,},
    { text: 'AltSpellings', value: 'altSpellings' },
]);


</script>
