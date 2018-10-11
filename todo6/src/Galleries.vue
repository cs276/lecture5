<template>

    <ul>
        <h1>Galleries Listing</h1>
        <li v-for="gallery in galleries">
            {{gallery.name}}
        </li>
    </ul>

</template>

<script>
    const API_KEY = '43a19a70-b76e-11e8-bf0e-e9322ccde4db';

    export default {
		data() {
			return {
				galleries: []
			}
		},
		created() {
			this.getGalleries(`https://api.harvardartmuseums.org/gallery?apikey=${API_KEY}`);
		},
		methods: {
			getGalleries(url) {
				fetch(url)
				.then(response => response.json())
				.then(data => { 
					this.galleries = this.galleries.concat(data.records);
					if (data.info.next) {
						this.getGalleries(data.info.next);
					}
				});
			}
		}
	}
</script>

<style>

</style>
