
 
   
    var ques=['The DOM allows us to use ______ to interact with HTML elements.', 'Which method adds a node to the end of the list of children of a specified parent node?', 'Which methods stops a setInterval()?', 'The ______ method is used to call a function whenever the specified event is delivered to the target.']
    var choice=["Javascript", "CSS", "HTML", "All the above", "includes()", "appendChild()", "append()", "reduce()", "slice()", "reverse()", "clearTimeout()", "clearInterval()", "handleEvent()", "preventDefault()", "addEventListener()", "abort()"]
    var ans=["Javascript", "appendChild()", "clearInterval", "addEventListener()"]
    
    var querep = ques.map(function(val, index){
      return [val, ans[index]]
    });
    
    //https://saturncloud.io/blog/how-to-include-a-javascript-file-in-another-javascript-file/#:~:text=To%20include%20a%20JavaScript%20file%20in%20another%20JavaScript%20file%2C%20we,functionality%20from%20other%20JavaScript%20files.
    
    export function Assessment() {
      console.log('test');
    }


  
