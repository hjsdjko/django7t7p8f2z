const base = {
    get() {
        return {
            url : "http://localhost:8080/django7t7p8f2z/",
            name: "django7t7p8f2z",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于python的白酒数据推荐系统"
        } 
    }
}
export default base
