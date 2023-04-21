<template>
    <div class="container">
        <GithubSearch></GithubSearch>
        <SearchList></SearchList>
    </div>
</template>

<script>
import GithubSearch from './components/GithubSearch.vue'
import SearchList from './components/SearchList.vue'
export default {
    name:'App',
    components:{GithubSearch,SearchList},
}
</script>

<style lang="css">
    
</style>
