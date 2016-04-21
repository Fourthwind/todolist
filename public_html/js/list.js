/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function (){
        var APPLICATION_ID = "AB64A165-C094-E234-FF9E-30B087A58300",
        SECRET_KEY = "6B6B14B0-ED12-D8E2-FF56-4FF2177E4100",
        VERSION = "v1";
        
        Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
        
        
        var postsCollection = Backendless.Persistence.of(Posts).find();
        
        console.log(postsCollection);
        
        var wrapper = {
            posts:  postsCollection.data
        };
        
        Handlebars.registerHelper('format', function (time){
          return moment(time).format("dddd, MMMM Do YYYY");            
        });
        
        var blogScript = $("#blogs-template").html();
        var blogTemplate = Handlebars.compile(blogScript);
        var blogHTML = blogTemplate(wrapper);
        
        $('.main-container').html(blogHTML);
       
});

function Posts(args){
    args = args || {} ;
    this.title = args.title || "";
    this.content = args.content || "";
    this.authorEmail =  args.authorEmail || "";
    
}