import Api from '@/services/Api'

export default {
    getStaleArticles(){
        return Api().get('/loadStale'); 
    },
    getFreshArticles(){
        return Api().get('/loadFresh');
    },
    saveOne(data){
        return Api().post('/saveArticle',{article_id: data});
    },
    getSaved(){
        return Api().get('/savedArticles');
    },
    deleteOne(data){
        return Api().put('/removeSavedArticle', {article_id: data})
    }
}