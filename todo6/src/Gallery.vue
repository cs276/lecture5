<template>
    <div>
        <h1>Object Listing</h1>
		<table class='table table-striped'>
			<tr v-for="object in objects">
			  <td>
				<router-link :to="`/object/${object.id}`">{{object.title}}</router-link>
			  </td>
			  <td>
				<img width="100px" :src="`${object.primaryimageurl}`"></img>
			  </td>
			  <td>
				<router-link :to="`${object.url}`">More Information</router-link>
			  </td>
			</tr>
		</table>
    </div>

</template>

<script>
    const API_KEY = '43a19a70-b76e-11e8-bf0e-e9322ccde4db';

    export default {
		data() {
			return {
				objects: []
			}
		},
		created() {
			this.getObjects(`https://api.harvardartmuseums.org/object?apikey=${API_KEY}&gallery=${this.$route.params.gallery_id}`);
		},
		methods: {
			getObjects(url) {
				fetch(url)
				.then(response => response.json())
				.then(data => { 
					this.objects = this.objects.concat(data.records);
					if (data.info.next) {
						this.getObjects(data.info.next);
					}
				});
			}
		}
	}
</script>

<style>

</style>
