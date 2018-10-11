<template>
  <div> 
    <h1>Object Information</h1>
    <ul>
      <li>Title: {{object.title}}</li>
      <li v-if="object.description != undefined">Description: {{object.description }}</li>
      <li v-if="object.provenance != undefined">Provenance: {{object.provenance }}</li>
      <li>Accession Year: {{object.accessionyear }}</li>
    </ul>

    <img width='50%' :src="`${object.primaryimageurl}`"></img>
  </div>
</template>

<script>

    const API_KEY = '43a19a70-b76e-11e8-bf0e-e9322ccde4db';
export default {

		data() {
			return {
				object: {} 
			}
		},
		created() {
			this.getObject(`https://api.harvardartmuseums.org/object/${this.$route.params.object_id}?apikey=${API_KEY}`);
		},
		methods: {
			getObject(url) {
				fetch(url)
				.then(response => response.json())
                .then(data => {
                  this.object = data;  
                });
			}
		}
	}

</script>

<style>
</style>
