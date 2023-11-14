<script lang="ts">
	import { FULL_PATH } from '../../../../../globalFeatherCMS/helpers/urls/fullPath.js';

    export let data
</script>

<a href={FULL_PATH(`/backend/editPage/${data.backend.page.id}`)}>Cancel Import</a> <br>
Import Section for: {data.backend.page.name}