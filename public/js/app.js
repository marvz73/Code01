/*
Fetch bootraped data, find the ID and return the index.
*/
function getIndex(params){
    var result;
    for( var i = 0, len = bootstrap.Accounts.length; i < len; i++ ) {
        if( bootstrap.Accounts[i]['id'] === params ) {
            // result = bootstrap.Accounts[i];
            return result = i;
            break;
        }
    }
    return result;
}

//Global ajax error message
var AJAXERROR = function(){
    alert("Something went wrong and we don't why!");
    window.location.reload();
}

var sharedProjectTask = [];
var accountId = bootstrap.Accounts[getIndex(parseInt(namespace.replace('/', '')))].id;
var socket = io.connect(baseUrl + '/' + accountId);


console.log(accountId);
var lastProjectId = 0;
//------------------------MITHRILJS COMPONENTS---------------------------------------------

var AccountLists = {
    view: function(ctrl, args) {
        if(args.lists.length)
        {

            return m("ul.dropdown-menu", [   

                args.lists.map(function(item) {               
                    return m("li", [
                        m("a[href='"+item.id+"']", item.name)
                    ])
                }),
                m("li.divider"),
                m("li", [
                    m("a[href='/4/" + accountId + "/"+lastProjectId+"']", {config: m.route}, m("i.fa.fa-info-circle") , " Details",[])
                ]), 
                // m("li.divider"),
                m("li", [
                    m('a[href="/1000/'+m.route.param('aid')+'/'+lastProjectId+'"]', {config: m.route}, m("i.fa.fa-cog") , " Settings",[])
                ]), 

            ])
        }
        else{
            return m("ul.dropdown-menu", [])
        }


    }
}

var ProjectLists = {

    view: function(ctrl, args) {

        function activeProject(elm, init){
    
            if(!init){
                if(m.route.param('pid'))
                {
                    return [
                        m("li.divider"),
                        m("li", [
                            m("a[href='/2/"+m.route.param('aid')+"/"+lastProjectId+"']",{config: m.route}, m("i.fa.fa-info-circle"), " Details",[])
                        ])
                    ]
                }
            } 

        }

        if(args.lists.length)
        {
            return m("ul.dropdown-menu", [  

                args.lists.map(function(item) {               
                    return m("li", [
                        m("a[href='/1/" + item.AccountId + "/" + item.id + "']", {config: m.route}, item.title)
                    ])
                }),

                

                activeProject()
            ])
        }
        else{
            return m("ul.dropdown-menu", [  
            ])
        }

    }
}

var AccountUsersLists = {
    controller: function(){
        var self = this;

        this.assigned = function(assigneeId){
            m.request({method:'post', url: baseUrl + '/api/v1/account/' + accountId + '/project/' +m.route.param('pid') + '/task/'+ m.route.param('tid'), data: {AssigneeId: assigneeId}}).then(function(){}, function(){
                AJAXERROR();
            })
        }
    },
    view: function(ctrl, args){

        function assignee(elm, init){
            if(!init)
            {     
                ctrl.assigned(elm.target.parentElement.id);
            }
        }
        
        if(args.lists.length > 0){
            return m("ul.dropdown-menu", [ 
                args.lists.map(function(item) {
                    if(args.id != item.id)
                    {
                        return m("li[id='"+item.id+"']",{onclick: assignee}, [
                            m("a", item.fullName),
                        ])
                    }

                })
            ]);
        }
        else{
            return m("ul.dropdown-menu")
        }
    }

}
// m("a[href='/1/" + val.AccountId + '/' + val.id + "'].cd-navs.pull-left", {config: m.route }, val.title, [
// m("i.fa.fa-plus-square.pull-left")
// ]),


//----------------------------------------------------------------------------------------

// task module
var task = {
    model: function(params) {

        this.userMention =  m.prop(params.userMention);
        this.completed      =  m.prop(params.completed);
        this.title          =  m.prop(params.title);
        this.description    =  m.prop(params.description);
        this.comments       =  m.prop(params.comments);
        this.assignee       =  m.prop(params.assignee);
    },
    controller: function() {

        var self = this;

        this.TaskDetails = {};
        this.TaskComments = [];
        this.usersList = [];
        this.userMention = '';
        this.atMention = false;
        this.mentionNotFound = false;
        //Task comment observ
        socket.on('taskCommentCreate', function(data){
            self.TaskComments.push(data);
            m.redraw(true)
        });

        socket.on('taskUpdate', function(data){
            self.detail = new task.model({assignee: resp.data.Assignee,completed: data.completed, title: "", description: data.desc});
            m.redraw(true)
        });

        //Fetch task details
        m.request({
            method:'get', 
            url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid')
        })
        .then(function(resp){
            self.TaskDetails = resp.data;
            self.detail = new task.model({assignee: resp.data.Assignee, completed: resp.data.completed, title: resp.data.title, description: resp.data.desc});
        }).then(function(){
            m.request({
                method: 'get',
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid') + '/comments'
            }).then(function(commentsResp){
                self.TaskComments = commentsResp.data;
            }, function(){
                AJAXERROR();
            });
        });

        //Add Comment
        this.addComment = function(jsonData){
             m.request({
                method: 'post',
                data: jsonData,
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid') + '/comment'
            })
            .then(function(){
                
            }, function(){
                AJAXERROR();
            });
        }

        this.updateTaskDesc = function(jsonData){
            m.request({
                method: 'post',
                data: jsonData,
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid')
            })
            .then(function(){

            }, function(){
                AJAXERROR();
            });
        }

        this.taskStatus = function(jsonData){
            m.request({
                method: 'post',
                data: jsonData,
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid')
            })
            .then(function(){
                
            }, function(){
                AJAXERROR();
            });
        }

        this.getUsers = function(callback){
            m.request({
                method:'get', 
                url: baseUrl + '/api/v1/account/'+m.route.param('aid')+'/users'
            }).then(function(resp){
                callback(resp);
            });
        }

        this.getUsers(function(res){
            console.log(res)
            self.atMentionUsers = new task.model({userMention: res.data});
        })


    },
    view: function(ctrl) {
        
        function loaded(elm, init, context){
            if( !init ){
                window.document.getElementById('taskDesc').addEventListener('keypress', Q.debounce(function(params){
                    var jsonData = {
                        desc: this.value
                    }

                    ctrl.updateTaskDesc(jsonData);

                }, 1000));                
                
                setTimeout(function(){

                    Q('.cd-panel').addClass('is-visible');

                }, 200)
            }
        }

        function hideRightModal(elm, init, context){
            if( !init ){
                var strClass = elm.target.className;
                if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
                    // document.getElementById("cd-panel").className = "cd-panel from-right";
                    Q('.cd-panel').removeClass('is-visible', function(resp){

                        Q('.cd-panel').timer(500, function(){
                            // m.route('/1/'+ m.route.param('aid') + '/' + m.route.param('pid'))
                            window.history.back()
                        })
                    });
                }
            }
        }

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        };


        function addComment(elm, init, context){
            if(!init){
      
                if(elm.keyCode == 13)
                {
                    var jsonData = {
                        comment : elm.target.value,
                        pid : m.route.param('pid'),
                        tid : m.route.param('tid')
                    }
                    // ctrl.addComment(jsonData);
                    elm.target.value = '';
                }

                var deferred = m.deferred();

                setTimeout(function(){
                   
                    if(elm.keyCode == 64 || elm.charCode == 64){
                        ctrl.atMention = true;
                    }

                    if(ctrl.atMention == true)
                    {
                        var comments = elm.target.value;
                        var lastChar = comments.charAt(comments.length - 1).toUpperCase();
                        if(lastChar != '@' && lastChar != comments.charAt(comments.length - 1).toLowerCase()){
                            
                            ctrl.userMention = elm.target.value;
                            m.redraw(true);
                            ctrl.atMention = true;
                        }else{

                            if(lastChar != comments.charAt(0).toLowerCase())
                            {
                                ctrl.atMention = false;
                                m.redraw(true)
                            } 
                        }
                    }

                    // Fire backspace keypress
                    var input = document.getElementById('taskComment');
                    input.onkeydown = function(e) {
                        var key = e.keyCode || e.charCode;
                        console.log(key)
                        if( key == 8 || key == 46 || key == 27)
                        {
                            // ctrl.atMention = false;
                        }

                        if( key == 38 || key == 40)
                        {

                            var userLists = document.getElementById('mentionedUsers');
                            var x = document.getElementById("mentionedUsers").nextSibling;

                            console.log(Q(".mentionedUser").next(0))

                            return false;
                        }

                    };

                }, 100);

            }
        }

        function addMention(elm){

        }

        function atMention(elm, init, context){
            if(!init){
                

                if(ctrl.atMention == true)
                {

                    var userList = ctrl.atMentionUsers.userMention();


                    if(ctrl.mentionNotFound)
                        return;

                    return m('div.dropdown.open#mentionedUsers', [

                        m('ul.dropdown-menu', [
                            userList.filter(function(val){
                                var filterValue = val.firstName;
                                var inputValue = ctrl.userMention.substr(1);
                                if(filterValue.substr(0, inputValue.length).toLowerCase() !== inputValue.toLowerCase()){
                                    ctrl.mentionNotFound = true;
                                    return false;
                                }else{
                                    return true;
                                }

                                // return filterValue.substr(0, inputValue.length).toLowerCase() === inputValue.toLowerCase();

                            }).map( function(val, index){

                                return m('li.mentionedUser', [
                                    m('a', val.firstName + " " + val.lastName)
                                ]);

                            })
                            
                        ])
                    ]);





                }
            }
        }
       
        function markComplete(elm, init, context){
            if(!init){

                // ctrl.detail.completed() = ! ctrl.detail.completed();

                if(ctrl.detail.completed())
                {
                     ctrl.detail.completed = m.prop(0);
                    ctrl.taskStatus({completed: 0});
                }
                else{
                    ctrl.detail.completed = m.prop(1);
                    ctrl.taskStatus({completed: 1});
                }
            }
        }

        return  m("div.cd-panel.from-right#cd-panel", {config: loaded, onclick: hideRightModal}, [
                    m("header.cd-panel-header.no-touch",[

                        m('div.title',[

m('i.fa.fa-square-o.pull-left',{style: !ctrl.detail.completed() ? 'display:block' : 'display:none', onclick: markComplete }),
m('i.fa.fa-check-square-o.pull-left',{style: ctrl.detail.completed() ? 'display:block' : 'display:none',onclick: markComplete }),

                            m("h4#taskTitle.pull-left", "Issue #"+ctrl.TaskDetails.id),
                            
                            m("span.dropdown#assignee",{onclick: function(elm, init){
                                if(!init){

                                    Q("#assignee").addClass('open')
                                    ctrl.getUsers(function(res){
                                        ctrl.usersList = res.data;
                                    })
                                        
                                }
                            }}, [
                                m("a[title='" + (ctrl.detail.assignee() ? ctrl.detail.assignee().fullName : "Assignee")  + "']", [
                                    m("i.fa.fa-user.task-user", { style: "color:" + (ctrl.detail.assignee() ? "#d95353" : "#777") })
                                ]),
                                m.component(AccountUsersLists,{lists: ctrl.usersList, id : ctrl.detail.assignee() ? ctrl.detail.assignee().id : 0}),
                            ])




                        ]),


                        m("a.cd-panel-close", {onclick: hideRightModal}, "Close")
                    ]),
                    m("div.cd-panel-container", [
                        m("div.cd-panel-content", [
                            
                            m('form', [
                                m('textarea[rows="10"][placeholder="Description here..."]#taskDesc.form-control', {onchange: m.withAttr('value', ctrl.detail.description), value: ctrl.detail.description()})
                            ]),
                            m('br'),
                            m('div.clearfix', [

                                ctrl.TaskComments.map(function(val, index){
                                
                                    return m('div.media', [
                                        m('div.media-left', [
                                            m('a[href="#"]', [
                                                // ( typeof val.User.ppicture != 'undefined')? m("img[src='"+val.User.ppicture+"']") : 
                                                m('img[width="60px"][height="60px"][src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjgxMjUiIHk9IjMyIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9nPjwvc3ZnPg=="]') 
                                            ])
                                        ]),
                                        m('div.media-body', [
                                            m('h5.media-heading', val.User.firstName + " " + val.User.lastName + " ", [
                                                m("a[title='"+val.createdAt+"']", "", [
                                                    m("i.fa.fa-clock-o")
                                                ])
                                            ]),
                                            m('small', val.comment)
                                        ])
                                    ])


                                })



                            ]),
                            m('hr'),
m('input[placeholder="Comment here...."].form-control#taskComment', {onkeypress: addComment}),

atMention()

                            // m("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magnam accusamus obcaecati nisi eveniet quo veniam quibusdam veritatis autem accusantium doloribus nam mollitia maxime explicabo nemo quae aspernatur impedit cupiditate dicta molestias consectetur, sint reprehenderit maiores. Tempora, exercitationem, voluptate. Sapiente modi officiis nulla sed ullam, amet placeat, illum necessitatibus, eveniet dolorum et maiores earum tempora, quas iste perspiciatis quibusdam vero accusamus veritatis. Recusandae sunt, repellat incidunt impedit tempore iusto, nostrum eaque necessitatibus sint eos omnis! Beatae, itaque, in. Vel reiciendis consequatur saepe soluta itaque aliquam praesentium, neque tempora. Voluptatibus sit, totam rerum quo ex nemo pariatur tempora voluptatem est repudiandae iusto, architecto perferendis sequi, asperiores dolores doloremque odit. Libero, ipsum fuga repellat quae numquam cumque nobis ipsa voluptates pariatur, a rerum aspernatur aliquid maxime magnam vero dolorum omnis neque fugit laboriosam eveniet veniam explicabo, similique reprehenderit at. Iusto totam vitae blanditiis. Culpa, earum modi rerum velit voluptatum voluptatibus debitis, architecto aperiam vero tempora ratione sint ullam voluptas non! Odit sequi ipsa, voluptatem ratione illo ullam quaerat qui, vel dolorum eligendi similique inventore quisquam perferendis reprehenderit quos officia! Maxime aliquam, soluta reiciendis beatae quisquam. Alias porro facilis obcaecati et id, corporis accusamus? Ab porro fuga consequatur quisquam illo quae quas tenetur.")
                        ])
                    ])
                ])
    }
}

//project module
var project = {
    controller: function() {
        var self = this;

        socket.emit('switchRoom', m.route.param('pid'))

        this.TaskList = [];
        this.ProjectImage = "";

        if(typeof m.route.param('cid') != 'undefined')
        {
            lastProjectId = m.route.param('cid')
        }
        else if(typeof m.route.param('pid') != 'undefined'){
            lastProjectId = m.route.param('pid')
        }else{
            lastProjectId = m.route.param('any');
        }

        //Task create observ
        socket.on('projectAttachmentCreate', function(data){
            console.log("Project attachment Create event fired::", data);

            self.ProjectImage = data.id;
            m.redraw(true)
        });

        //Task create observ
        socket.on('taskCreate', function(data){
            console.log("Task Create event fired::", data);
            self.TaskList.push(data)
            m.redraw(true)
        });  

        //Task update observ
        socket.on('taskUpdate', function(data){
            for(var key in self.TaskList) {
                var val = self.TaskList[key];
                if(val.id == data.id)
                {
                    self.TaskList[key].Y = data.Y;
                    self.TaskList[key].X = data.X;
                    m.redraw(true)
                }                
            }
        });

        if(typeof m.route.param('pid') != 'undefined')
        {
            //Fetch project task
            m.request({
                method:'get', 
                url:  baseUrl + '/api/v1/account/' + accountId + '/project/' + lastProjectId + '/tasks'
            }).then(function(taskResp){
                if(taskResp.data.length){
                    self.TaskList = taskResp.data;
                    sharedProjectTask = taskResp.data;
                }else{
                    sharedProjectTask = []
                }
            }, function(){
                AJAXERROR();
            });
        }
        if(lastProjectId != 0)
        {
            //Fetch project image
            m.request({
                method:'get', 
                url:  baseUrl + '/api/v1/account/' + accountId + '/project/' + lastProjectId + '/attachments'
            }).then(function(projectImage){
                self.ProjectImage = "";
                if(projectImage.data)
                {
                    self.ProjectImage = projectImage.data.id;
                }
            })
        }

        //Update task position
        this.updateTask = function(taskData){

            var jsonData = {
                Y: taskData.Y,
                X: taskData.X
            }

            m.request({method:'post', url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' + lastProjectId + '/task/' + taskData.id, data: jsonData })
            .then(function(resp){
                
            },function(){
                AJAXERROR();
            })
        
        };

        this.UploadFile = function(formData){
            return m.request({
                method: "POST",
                url: '/api/v1/account/' + accountId + '/project/' + lastProjectId + '/attachments',
                data: formData,
                //simply pass the FormData object intact to the underlying XMLHttpRequest, instead of JSON.stringify'ing it
                serialize: function(value) {return value}
            }).then(function(resp){
                console.log(resp)
            });
        }

    },
    view: function(ctrl) {
        //Bind an event to the element
        function draggable(element, init, context){
         
            if( !init ){
                var dragged = 0;
                var dragdrop = DragDrop.bind(element, {
                    // anchor: anchor,
                    boundingBox: 'offsetParent',
                    dragstart: function() {
                        console.log('dragstart')
                        dragged = 1;
                    },
                    dragend: function(){
                        console.log('dragend')

                        var taskIndex = this.getAttribute("data-index");
                        var tid = this.getAttribute("data-id");

                        if(dragged){
                            m.route('/3/' + m.route.param('aid') + '/' + lastProjectId + '/' + tid)
                        }else{
                            var xPosition = 0;
                            var yPosition = 0;
                            var elm = element;

                            ctrl.updateTask({index: taskIndex, id: tid, X: element.offsetLeft + 'px', Y: element.offsetTop + 'px'});
                        }
                    },
                    drag: function(){
                        dragged = 0;
                        console.log('draggedx')
                         $('.cd-btn').unbind('click')
                    }
                });

            }
        }

        function taskList(elm, init, context){
            if(!init){
                return ctrl.TaskList.map(function (t, index) {
                    if(!t.completed)
                    {
                    return m("li#drag-drop.cd-single-point", {"data-id": t.id, "data-index": index, style:{position: 'absolute', left: t.X,  top: t.Y}, config: draggable}, [
                        m("a[href='javascript:void(0)'].cd-btn#cd-btn", [
                            m("i.fa.fa-thumb-tack" )
                        ]),
                        m("div.cd-more-info.cd-top")
                    ])
                    }
                })
            }
        }

        function dragDropUpload(elm, init, context){

            if(!init)
            {
                var elms = document.getElementsByTagName("body")[0];


                elms.ondragover = function () { 

                    this.className = 'uploading'; return false; };
                elms.ondragend = function () { 

                    this.className = ''; return false; };
                elms.ondrop = function (event) {
                    event.preventDefault && event.preventDefault();
                    this.className = '';
                
                    var files = event.dataTransfer.files;

                    var formData = new FormData;        
                    for (var i = 0; i < files.length; i++) {
                        formData.append("file", files[i])
                    }

                    ctrl.UploadFile(formData);

                    return false;
                } 
                elms.ondragleave = function(){
                    this.className = '';return false;};
            }

        }

        function projectImage(elm, init, context){

            if(!init)
            {
                if(typeof ctrl.ProjectImage != 'undefined')
                {
                    return m("img[src='" + baseUrl + "/api/v1/account/"+accountId+"/project/"+lastProjectId+"/attachment/"+ctrl.ProjectImage+"']");
                }
                else
                {
                    return m('h1',{style: "color: red"}, 'No image attach!');
                }
            }
        }

        return m("div", [
                    //pins annotation
                    m("div.cd-product.cd-container", [
                        m("div#wrapper", { config: dragDropUpload },[

                            m("ul", [
                                ((ctrl.TaskList.length) ? taskList() : '' )
                            ]),
             
                            //Project images
                            projectImage()

                         
                        ])
                    ])
                ]);
    }
}

var subproject = {
    controller: function() {


    },
    view: function(ctrl){
        //Bind an event to the element
        function draggable(element, init, context){
         
            if( !init ){
                var dragged = 0;
                var dragdrop = DragDrop.bind(element, {
                    // anchor: anchor,
                    boundingBox: 'offsetParent',
                    dragstart: function() {
                        console.log('dragstart')
                        dragged = 1;
                    },
                    dragend: function(){
                        console.log('dragend')

                        var taskIndex = this.getAttribute("data-index");
                        var tid = this.getAttribute("data-id");

                        if(dragged){
                            m.route('/3/' + m.route.param('aid') + '/' + m.route.param('pid') + '/' + tid)
                            // console.log(ctrl.list[0])
                        }else{
                            var xPosition = 0;
                            var yPosition = 0;
                            var elm = element;
                            // console.log(tid, element.offsetLeft, element.offsetTop)
                            ctrl.updateTask({index: taskIndex, id: tid, X: element.offsetLeft + 'px', Y: element.offsetTop + 'px'});
                        }
                    },
                    drag: function(){
                        dragged = 0;
                        console.log('draggedx')
                         $('.cd-btn').unbind('click')
                    }
                });

            }
        }

        function dragDropUpload(elm, init, context){

            if(!init)
            {
                var elms = document.getElementsByTagName("body")[0];
             
                elms.ondragover = function () { 
                    document.getElementsByTagName("upload").className = '';
                    this.className = 'uploading'; return false; };
                elms.ondragend = function () { 
                    document.getElementsByTagName("upload").className = 'hide';
                    this.className = ''; return false; };
                elms.ondrop = function (event) {
                    event.preventDefault && event.preventDefault();
                    this.className = '';
                
                    var files = event.dataTransfer.files;

                    var formData = new FormData;        
                    for (var i = 0; i < files.length; i++) {
                        formData.append("file", files[i])
                    }

                    ctrl.UploadFile(formData);

                    return false;
                } 
            }

        }

        function projectImage(elm, init, context){

            if(!init)
            {
                if(typeof ctrl.ProjectImage != 'undefined')
                {
                    return m("img[src='" + baseUrl + "/api/v1/account/"+accountId+"/project/"+lastProjectId+"/attachment/"+ctrl.ProjectImage+"']");
                }
                else
                {
                    return m('h1',{style: "color: red"}, 'No image attach!');
                }
            }
        }

        return m("div", [
            //pins annotation
            m("div.cd-product.cd-container", [
                m("div#wrapper", { config: dragDropUpload },[

                    // m("ul", [
                    //     ((ctrl.TaskList.length) ? taskList() : '' )
                    // ]),
     
                    //Project images
                    projectImage()

                 
                ])
            ])
        ]);
    }
}




var projectDetails = {
    model: function(params) {
        this.progress    =  m.prop(0); 
        this.title       =  m.prop(params.title);
        this.description =  m.prop(params.description);
    },
    controller: function() {

        var self = this;
        this.projectDetails = {};
        this.TaskList = [];
        this.archived = 0;
        //Project create observ
        socket.on('projectCreate', function(data){
            self.projectDetails.SubProjects.push(data);
            m.redraw(true);
        }); 

        // Task create observ
        socket.on('taskCreate', function(data){
            self.TaskList.push(data);
            m.redraw(true);
        });

        this.getProjectDetails = function(){
            m.request({
                method:'get', 
                url:  baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project/' + m.route.param('pid') + ''
            }).then(function(resp){
                self.projectDetails = resp.data;
                self.detail =  new projectDetails.model(resp.data);
            },function(){
                AJAXERROR();
            })
        }

        this.getProjectDetails();

        //Fetch project task
        m.request({
            method:'get', 
            url:  baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project/' + m.route.param('pid') + '/tasks'
        }).then(function(taskResp){
            if(taskResp.data.length){
                self.TaskList = taskResp.data;
            }
        });

        this.updateProjectDesc = function(jsonData){
            m.request({
            method:'post', 
            url:  baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project/' + m.route.param('pid'),
            data: jsonData
            }).then(function(resp){
                self.detail = new projectDetails.model(resp.data)
            }, function(){
                AJAXERROR();
            })
        }

        this.updateProjectTitle = function(jsonData){
            m.request({
            method:'post', 
            url:  baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project/' + m.route.param('pid'),
            data: jsonData
            }).then(function(resp){
                self.detail = new projectDetails.model(resp.data)
            }, function(){
                AJAXERROR();
            })
        }

        this.addSubProject = function(pid){
            return m.request({method:'post', url: baseUrl + '/api/v1/account/' + accountId + '/project', data: {ProjectId: pid, title: 'Project Title'}}).then(function(){}, function(){
                AJAXERROR();
            })
        }

    },
    view: function(ctrl){

        function loaded(elm, init, context){
            if( !init ){

                setTimeout(function(){
                    Q('.cd-panel').addClass('is-visible');
                }, 200)

                window.document.getElementById('projectDesc').addEventListener('keypress', Q.debounce(function(params){
                    var jsonData = {
                        description: this.value
                    }

                    ctrl.updateProjectDesc(jsonData);

                }, 1000));  

                window.document.getElementById('projectTitle').addEventListener('keypress', Q.debounce(function(params){
                    var jsonData = {
                        title: this.value
                    }

                    ctrl.updateProjectTitle(jsonData);

                }, 1000));  

            }
        }

        function hideRightModal(elm, init, context){
            if( !init ){
                var strClass = elm.target.className;
                if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
                    Q('.cd-panel').removeClass('is-visible', function(resp){
                        Q('.cd-panel').timer(500, function(){
                            // window.history.back()
                            m.route('/1/'+ m.route.param('aid') + '/' + m.route.param('pid'))
                        })
                    });
                }
            }
        }

        var totalCompleted = 0;

        function archived(elm, init, context){
            if(!init){
                if(ctrl.archived == 0){
                    ctrl.archived = 1;
                }else{
                    ctrl.archived = 0;
                }
            }
        }

        function projectUncompletedTask(elm, init, context){

            if(!init)
            {
                if(sharedProjectTask.length)
                {
                    var template = sharedProjectTask.map(function(val, index){

                        if( (val.completed == 0 && ctrl.archived == 0) || (val.completed == 1 && ctrl.archived == 1))
                        {
                            if(val.completed == 1 && ctrl.archived == 1)
                            {
                                return m('li', [
                                    m('a[role="disable"][href="/3/' + m.route.param('aid') + '/' + m.route.param('pid') + '/' + val.id+'"]', {config: m.route}, 'Issue #'+val.id,[
                                    
                                        m('span.pull-right', val.createdAt)
                                    ])
                                ]);  
                            }else{
                                return m('li', [
                                    m('a[href="/3/' + m.route.param('aid') + '/' + m.route.param('pid') + '/' + val.id+'"]', {config: m.route}, 'Issue #'+val.id,[
                                    
                                        m('span.pull-right', val.createdAt)
                                    ])
                                ]);  
                            }
                        }else{
                            totalCompleted++;
                            ctrl.detail.progress = ((totalCompleted / sharedProjectTask.length) * 100);
                        }

                    });

                    if(sharedProjectTask.length === totalCompleted)
                    {
                        return m('li',[
                            m('a.no-result', 'No Task')
                        ]);
                    }else{
                        return template;
                    }
                }else{
                    return m('li',[
                        m('a.no-result', 'No Task')
                    ])   
                }

            }
        }

        function projectSubTask(elm, init, context){
            if(!init)
            {
                if(ctrl.projectDetails.SubProjects.length)
                {
                    return ctrl.projectDetails.SubProjects.map(function(val, index){
                        return m('li',[
                            m('a[href="/1/' + m.route.param('aid') + '/' + lastProjectId + '/' + val.id + '"]', {config: m.route}, 'Sub Project #'+val.id,[
                                m('span.pull-right', val.createdAt)
                            ])
                        ])
                    })
                }else{
                    return m('li',[
                        m('a.no-result', 'No Result')
                    ])   
                }

            }
        }

        function projectSubTaskContainer(elm, init, context){
            if(!init && !ctrl.projectDetails.ProjectId)
            {

                return m('m', [
                    m('legend', "Sub Project's ",[
                        m('a',{ onclick: function(elm, init){
                            if(!init){
                                ctrl.addSubProject(m.route.param('pid'))
                            }
                        } } , [
                            m("i.fa.fa-plus-square")
                        ])
                    ]),
                    m('ul.unstyled.project-task-list', [
                        projectSubTask()
                    ])
                ])

            }
        }

        return  m("div.cd-panel.from-right#cd-panel", {config: loaded, onclick: hideRightModal}, [
                    m("header.cd-panel-header.no-touch",[
                        m("input.title#projectTitle", {onchange: m.withAttr("value", ctrl.detail.title), value: ctrl.detail.title() }),
                        m("a.cd-panel-close", {onclick: hideRightModal}, "Close")
                    ]),
                    m("div.cd-panel-container", [
                        m("div.cd-panel-content",[
                            m('div.form-group', [
                                m('textarea[rows="6"]#projectDesc.form-control', {onchange: m.withAttr("value", ctrl.detail.description)}, ctrl.detail.description()),
                            ]),

                            m('div.progress',[
                                m('div.progress-bar[progressbar]', {config: function(elm, init){
                                    if(!init){
                                        elm.innerHTML = ctrl.detail.progress + '% Complete';
                                        elm.style.width = ctrl.detail.progress + '%';
                                    }
                                }})
                            ]),

                            m('fieldset.settings',[

                                m('legend', "Project Task's ",[

                                    m('a[title="Completed Task"]',{ onclick: archived },[
                                        m('i.fa.fa-archive')
                                    ])

                                ]),
                                m('ul.unstyled.project-task-list', [
                                    projectUncompletedTask(),
                                ]),

                                // m('p',''),

                                // projectSubTaskContainer()

                            ])
                        ])
                    ])
                ])

    }
}


var settings = {
    model: function(params){
        this.firstName  = m.prop(params.firstName);
        this.middleName  = m.prop(params.middleName);
        this.lastName   = m.prop(params.lastName);
        this.email      = m.prop(params.email);
    },
    controller: function() {

        var self = this;
        self.accountDetails = {};

        this.getUserDetails = function(){
            m.request({method:'get', url: baseUrl + '/api/v1/user/' + bootstrap.Accounts[0].AccountUser.UserId })
            .then(function(resp){
                self.accountDetails = new settings.model(resp.data);
            },function(){
                AJAXERROR();
            })
        }

        this.getUserDetails();
        
    },
    view: function(ctrl){

        function loaded(elm, init, context){
            if( !init ){               
                setTimeout(function(){
                    Q('.cd-panel').addClass('is-visible');
                }, 200)
            }
        }

        function hideRightModal(elm, init, context){
            if( !init ){
                var strClass = elm.target.className;
                if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
                    Q('.cd-panel').removeClass('is-visible', function(resp){
                        Q('.cd-panel').timer(500, function(){
                            window.history.back()
                        })
                    });
                }
            }
        }

        return  m("div.cd-panel.from-right#cd-panel", {config: loaded, onclick: hideRightModal}, [
                    m("header.cd-panel-header.no-touch",[
                        m("h4.title","Settings"),
                        m("a.cd-panel-close", {onclick: hideRightModal}, "Close")
                    ]),
                    m("div.cd-panel-container", [
                        // m('ul.nav.nav-tabs', [
                        //     m('li', [
                        //         m('a[href="#"]', 'Menu 1')
                        //     ]),
                        //     m('li', [
                        //         m('a[href="#"]', 'Menu 2')
                        //     ])
                        // ]),
                        m("div.cd-panel-content",[



                            m('form', [
                                m('fieldset.settings',[
                                    m('legend', "Personal Details"),
                                    m('div.settings-group', [
                                        m('input.form-control[required][readonly][type="text"][placeholder="Email"]', {onchange: m.withAttr("value", ctrl.accountDetails.email), value: ctrl.accountDetails.email() }),
                                        m('input.form-control[required][type="text"][placeholder="First Name"]', {onchange: m.withAttr("value", ctrl.accountDetails.firstName), value: ctrl.accountDetails.firstName() }),
                                        m('input.form-control[required][type="text"][placeholder="Last Name"]', {onchange: m.withAttr("value", ctrl.accountDetails.lastName), value: ctrl.accountDetails.lastName() }),
                                        m('input.btn.btn-sm.btn-primary.form-control[value="Save"][type="submit"]')
                                    ]),

                                ])
                            ]),

                            m('form', [
                                m('fieldset.settings',[
                                    m('legend', "Password Details"),
                                    m('div.settings-group', [
                                        m('input.form-control[required][type="text"][placeholder="Old Password"]'),
                                        m('input.form-control[required][type="text"][placeholder="New Password"]'),
                                        m('input.form-control[required][type="text"][placeholder="Confirm Password"]')
                                    ])
                                ])
                            ])



                        ])
                    ])
                ])
    }
}

var accounts = {
    controller: function(){
        var self = this;
        var accountsProjectList = [];
        var accountsUserList = [];

        m.request({method:'get', url: baseUrl + '/api/v1/account/' + accountId + '/projects' })
        .then(function(resp){
            self.accountsProjectList = resp.data;
        },function(){
            AJAXERROR();
        })
        .then(function(){

            m.request({method:'get', url: baseUrl + '/api/v1/users' })
            .then(function(resp){
                self.accountsUserList = resp.data;
            },function(){
                AJAXERROR();
            }) 

        })
    },
    view: function(ctrl){


        function projectList(elm, init, context){
            if( !init ){
                if(ctrl.accountsProjectList.length)
                {
                    return ctrl.accountsProjectList.map(function(val, index){
                        return m('li',[
                            m('a[href="/3/' + m.route.param('aid') + '/' + m.route.param('pid') + '/' + val.id+'"]', {config: m.route}, val.title)
                        ])
                    })
                }
                else
                {
                    return m('li',[
                        m('a.no-result', 'No Result')
                    ]) 
                }
            }     
        }

        function userList(elm, init, context){
            if( !init ){
                if(ctrl.accountsUserList.length)
                {
                    return ctrl.accountsUserList.map(function(val, index){
                        return m('li',[
                            // m('a[href="/3/' + m.route.param('aid') + '/' + m.route.param('pid') + '/' + val.id+'"]', {config: m.route}, 'Issue #'+val.id,[
                            //     m('span.pull-right', val.createdAt)
                            // ])
                        ])
                    })
                }
                else
                {
                    return m('li',[
                        m('a.no-result', 'No Result')
                    ]) 
                }
            }
        }

        function loaded(elm, init, context){
            if( !init ){               
                setTimeout(function(){
                    Q('.cd-panel').addClass('is-visible');
                }, 200)
            }
        }

        function hideRightModal(elm, init, context){
            if( !init ){
                var strClass = elm.target.className;
                if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
                    Q('.cd-panel').removeClass('is-visible', function(resp){
                        Q('.cd-panel').timer(500, function(){
                            window.history.back()
                            // m.route('/0')
                        })
                    });
                }
            }
        }

        return  m("div.cd-panel.from-right#cd-panel", {config: loaded, onclick: hideRightModal}, [
                    m("header.cd-panel-header.no-touch",[
                        m("h4.title", 'Account'),
                        m("a.cd-panel-close", {onclick: hideRightModal}, "Close")
                    ]),
                    m("div.cd-panel-container", [
                        m("div.cd-panel-content",[

                            m('ul.unstyled.project-task-list', [
                                projectList()
                            ])


                        ])
                    ])
                ])

    }
}

var accountDetails = {

	model: function(params){
        this.name = m.prop(params.name);
		this.user = m.prop(params.user);
		this.userList = m.prop(params.users);
	},
    controller: function() {
        var self = this;

        self.inviteUser =  new accountDetails.model({user: "", users: [], name:""});
        self.details = "";

        //get account details
        m.request({method:'get', url: baseUrl + '/api/v1/account/' + m.route.param('aid')})
        .then(function(resp){
            self.details = new accountDetails.model({name: resp.data.name});
        }, function(){
            AJAXERROR();
        });

        //get accounts users
        m.request({method:'get', url: baseUrl + '/api/v1/account/'+m.route.param('aid')+'/accountUsers' })
        .then(function(resp){
            self.userList = new accountDetails.model({user: "", users: resp.data});
        },function(){
            AJAXERROR();
        });

        this.addUserAccount = function(params){
            m.request({
                method:'post', 
                url: baseUrl + '/api/v1/account/' + m.route.param('aid') + '/inviteUser',
                data: {'email': params},
            })
            .then(function(resp){
                self.inviteUser =  new accountDetails.model({user: "", users: []});
            },function(){
                AJAXERROR();
            });
        }

        this.updateAccountName = function(params){
            m.request({
                method:'post', 
                url: baseUrl + '/api/v1/account/' + m.route.param('aid'),
                data: params,
            })
            .then(function(resp){
                self.details = new accountDetails.model({name: resp.data.name});
            },function(){
                AJAXERROR();
            });
        }

    },
    view: function(ctrl){

        function loaded(elm, init, context){
            if( !init ){               
                setTimeout(function(){
                    Q('.cd-panel').addClass('is-visible');
                }, 200);
                window.document.getElementById('accountTitle').addEventListener('keypress', Q.debounce(function(params){
                    var jsonData = {
                        name: this.value
                    }

                    ctrl.updateAccountName(jsonData);

                }, 1000)); 
            }
        }

        function hideRightModal(elm, init, context){
            if( !init ){
                var strClass = elm.target.className;
                if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
                    Q('.cd-panel').removeClass('is-visible', function(resp){
                        Q('.cd-panel').timer(500, function(){
                            window.history.back()
                        })
                    });
                }
            }
        }

        function addUserAccount(elm, init, context){
            if( !init ){
                ctrl.addUserAccount(ctrl.inviteUser.user());
                return false;
            }
        }

        function accountOwner(em, init){
            if(!init){
                
                if(val.role)
                {
                    return 
                }
                else{
                    return m('span.pull-right', '')
                }
            }
        }

        function userList(elm, init, context){
            if( !init ){
            	// console.log(ctrl.userList.userList())

            	var list = ctrl.userList.userList();
            	return list.map(function (val, index){

            		if(val.User.verified)
            		{
                        if(val.role)
                        {
                            return m('li', [
                                m('a.clearfix', val.User.firstName + ' ' + val.User.lastName, [
                                    m('span.pull-right', 'Owner')
                                ])
                            ]);
                        }
                        else{
                            return m('li', [
                                m('a.clearfix', val.User.firstName + ' ' + val.User.lastName)
                            ]);
                        }
            		}
                    




            	})
            }

        }   

        return  m("div.cd-panel.from-right#cd-panel", {config: loaded, onclick: hideRightModal}, [
                    m("header.cd-panel-header.no-touch",[
                        m("input.title#accountTitle", {onchange: m.withAttr("value", ctrl.details.name), value: ctrl.details.name()}),
                        m("a.cd-panel-close", {onclick: hideRightModal}, "Close")
                    ]),
                    m("div.cd-panel-container", [
                        // m('ul.nav.nav-tabs', [
                        //     m('li', [
                        //         m('a[href="#"]', 'Menu 1')
                        //     ]),
                        //     m('li', [
                        //         m('a[href="#"]', 'Menu 2')
                        //     ])
                        // ]),
                        m("div.cd-panel-content",[

                            m('fieldset.settings',[

                                m('legend', "Invite User's"),
                                m('form.settings-group', {onsubmit: addUserAccount}, [
                                    m('div.form-group', [
                                        m('input.form-control[type="email"][placeholder="Enter Email Address"][required]', {onchange: m.withAttr("value", ctrl.inviteUser.user), value: ctrl.inviteUser.user()}),
                                    ]),
                                    m('div.form-group', [
                                        m('button.btn.btn-primary', 'Send Invite')
                                    ]),
                                ]),

                            ]),

                            m('fieldset.settings', [
                            	m('legend', "Group"),
                            	m('ul.unstyled.list-item', [
                            		userList()
                            	])
                            ])


                        ])
                    ])
                ])
    }
}


var navigation = {
    model: function(param){
        this.accountTitle = param.atitle;
        this.projectTitle = param.ptitle;
    },
    controller: function() {
        var self = this;
        this.ProjectList = [];
        this.AccountList = [];

        socket.on('projectCreate', function(data){
            self.ProjectList.push(data);
            m.redraw(true);
        });


        m.request({method:'get', url: baseUrl + '/api/v1/account/' + accountId + '/projects'})
        .then(function(projectResp){
            if(projectResp.data.length)
            {
                self.ProjectList = projectResp.data;
                if(typeof m.route.param('pid') != 'undefined')
                {
                    self.ProjectList.map(function(item){
                        if(m.route.param('pid') == item.id){
                            self.ptitle = item.title;
                        }
                    });
                }else{
                    self.ptitle = "Projects";
                }
            }else{
                self.ptitle = "Projects";
            }
        }, function(){
            AJAXERROR();
        });



        m.request({method:'get', url: baseUrl + '/api/v1/accounts'})
        .then(function(resp){
            self.AccountList = resp.data;

            self.AccountList.map(function(item){
                if(accountId == item.id){
                console.log(accountId ,'-', item.name)
                    self.atitle = item.name;
                }
            })

        }, function(){
            AJAXERROR();
        })

        this.addTask = function (elm, init, context ) {

        var w = document.documentElement.clientWidth, 
            h = document.documentElement.clientHeight;

        var wx = (w - elm.target.offsetWidth)/2 + 'px';
        var hx = (h - elm.target.offsetHeight)/2 + window.pageYOffset + 'px';

            var jsonData = {
                'desc' : '',
                'X': wx,
                'Y': hx
            }

            m.request({method:'post', url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task', data: jsonData}).then(function(){}, function(){
                AJAXERROR();
            });
        };

        this.addAccount = function(){
            return m.request({method:'post', url: baseUrl + '/api/v1/account', data: {name: 'Account Name'}})
            .then(function(resp){
                m.route('/4/' + resp.data.id)
            }, function(){
                AJAXERROR();
            })  
        };

        this.addProject = function () {
            return m.request({method:'post', url: baseUrl + '/api/v1/account/' + accountId + '/project', data: {title: 'Project Title'}}).then(function(){}, function(){
                AJAXERROR();
            })
        };
    },
    view: function(ctrl) {

        function projectDetails(elm, init, context){
            if(!init)
            {
                return m.render(document.getElementById("task"), projectDetails);
            }
        }

        //Get project list
        function projectList(elm, init, context){
            if(!init)
            {
                return ctrl.ProjectList.map(function (val, index) {
                    return m("li.clearfix", [
                       
                        m("a[href='/1/" + val.AccountId + '/' + val.id + "'].cd-navs.pull-left", {config: m.route }, val.title, [
                            m("i.fa.fa-plus-square.pull-left")
                        ]),
                        m("a[href='/2/" + val.AccountId + "/" + val.id + "'].cd-navs.pull-right", {config: m.route}, [
                            m("i.fa.fa-bars")
                        ]),                        
                    ])
                })     
            }
        }

        //Get account list
        function accountList(elm, init, context){
            if(!init)
            {

                return ctrl.AccountList.map(function (val, index) {
                    return m("li.clearfix", [                        
                        m("a[href='" + val.id + "'].pull-left.cd-navs", val.name,[
                            m("i.fa.fa-users.pull-left")
                        ]),
                        m("a[href='/4/" + val.id + "/details'].cd-navs.pull-right",{config: m.route}, [
                            m("i.fa.fa-bars")
                        ]),
                    ])
                })     
            }
        }

        function projectLoaded(elm, init){
            if(!init){
                if(m.route.param('pid'))
                {
                    return m('li',[
                        m('a[title="Pins"][role="button"]', { onclick:  ctrl.addTask },[
                            m('i.fa.fa-thumb-tack',{style: "color:#e84a64;font-size: 1.4rem"})
                        ])
                    ]) 
                }else{
                    return;
                }


            }
        }
        return m("nav.navbar.navbar-default.navbar-static-top.navbar-fixed-top", [
            m("div.container", [
                m("div.navbar-header", [
                    m('button[type="button"][data-toggle="collapse"][data-target="#navbar"].navbar-toggle.collapsed', [
                        m('span.sr-only', 'Toggle navigation'),
                        m('span.icon-bar'),
                        m('span.icon-bar'),
                        m('span.icon-bar')
                    ]),
                    m('a[href="/"].navbar-brand', {style:"font-size: 1.4rem"}, [
                        m('i.fa..fa-bug.fa-6')
                    ])
                ]),

                m('div#navbar.navbar-collapse.collapse', [
                    m('ul.nav.navbar-nav', [
                        // m('li', [ m('a[href="/"]', {config: m.route}, 'Home')]),

                    ]),

                    m('ul.nav.navbar-nav.pull-right', [

                        projectLoaded(),

                        m('li.dropdown#quick-add', { 

                            onclick: function(elm, init){
                                if(!init){
                                    var id = Q('#quick-add')
                                    Q(".dropdown:not(#quick-add)").removeClass('open');
                                    if(id.hasClass('open'))
                                    {
                                        id.removeClass('open')
                                    }
                                    else{
                                        id.addClass('open')  
                                    }
                                }
                            }
                            // onmouseout: function(elm, init){
                            //     if(!init){ 
                            //         Q('#quick-add').removeClass('open')
                            //     }
                            // }

                        },[
                            m('a[role="button"][title="Quick Add"]' ,[
                                m('i.fa.fa-plus-circle',{style: "color: #6BC24B;font-size: 1.4rem"})
                            ]),
                            m('ul.dropdown-menu',[
                                m('li', [
                                    m('a[role="button"]','Project')
                                ]),
                                m('li', [
                                    m('a[role="button"]','Account')
                                ])
                            ])
                        ]),
                        m('li.dropdown#project-dropdown', { 

                            onclick: function(elm, init){
                                if(!init){
                                    var id = Q('#project-dropdown')
                                    Q(".dropdown:not(#project-dropdown)").removeClass('open');
                                    if(id.hasClass('open'))
                                    {
                                        id.removeClass('open')
                                    }
                                    else{
                                        id.addClass('open')  
                                    }
                                }
                            }

                        }, [

                            m('a[role="button"].dropdown-toggle' , ctrl.ptitle + " ", [
                                m('span.caret')
                            ]),

                            m.component(ProjectLists, {lists: ctrl.ProjectList}),

                        ]),
                        // m('li.dropdown#account-dropdown', {

                        //     onmouseover: function(elm, init){
                        //          Q(".dropdown").removeClass('open');
                        //         if(!init){
                        //             Q('#account-dropdown').addClass('open')
                        //         }
                        //     },
                        //     onmouseout: function(elm, init){
                        //         if(!init){ 
                        //             Q('#account-dropdown').removeClass('open')
                        //         }
                        //     }

                        // }, [

                        //     m('a[role="button"].dropdown-toggle', ctrl.atitle + " ", [
                        //         m('span.caret')
                        //     ]),

                        //     m.component(AccountLists, {lists: ctrl.AccountList}),

                        // ]),

// [href="/1000/'+m.route.param('aid')+'/'+lastProjectId+'"]',{config: m.route},
                        m('li.dropdown#user-dropdown', {
                            onclick: function(elm, init){
                                if(!init){
                                    var id = Q('#user-dropdown')
                                    Q(".dropdown:not(#user-dropdown)").removeClass('open');
                                    if(id.hasClass('open'))
                                    {
                                        id.removeClass('open')
                                    }
                                    else{
                                        id.addClass('open')  
                                    }
                                }
                            }
                        }, [
                            m('a[role="button"]', bootstrap.fullName + " ", [
                                m('span.fa.fa-user.pull-left',{style:"font-size: 1.4rem"}),
                            ]),
                            m.component(AccountLists, {lists: ctrl.AccountList}),
                        ]),

                        m('li.dropdown',  [
                            m('a[role="button"][href="/logout"]', "", [
                                m('span.fa.fa-power-off.pull-left',{style:"font-size: 1.4rem"}),
                            ])
                        ])
                    ])



                ])
            ])

        ]);








        // //Navigation Menu
        // return m("#cd-nav", [
        //     m("a[href='javascript:void(0)'].cd-nav-trigger.cd-navs", {}, "Menu",[
        //         m("span","")
        //     ]),
        //     m("nav#cd-main-nav", [
                
        //         m("ul", [
        //             m("li.clearfix", [
        //                 // m("a", { onclick:  ctrl.addTask }, "<i class="fa fa-plus"></i>")
        //                 m("a[title='Add Project'].pull-left.cd-navs", {onclick: ctrl.addProject},[
        //                     m("i.fa.fa-plus-square")
        //                 ]),
        //                 m("a[title='Add Pins'].pull-left.cd-navs", { onclick:  ctrl.addTask }, [
        //                     m("i.fa.fa-thumb-tack")
        //                      // data-toggle="tooltip" data-placement="left" title="Tooltip on left"
        //                 ]),
        //                 m("a[title='Add Account'].pull-left.cd-navs", {onclick: ctrl.addAccount},[
        //                     m("i.fa.fa-users")
        //                      // data-toggle="tooltip" data-placement="left" title="Tooltip on left"
        //                 ]),
        //                 m("a[title='Settings'][href='/1000/"+m.route.param('aid')+"'].cd-navs.pull-right", {config: m.route}, [
        //                     m("i.fa.fa-cog")
        //                      // data-toggle="tooltip" data-placement="left" title="Tooltip on left"
        //                 ])
        //             ]),

        //             ((ctrl.ProjectList.length) ? projectList() : '' ),


        //             ((ctrl.AccountList.length) ? accountList() : '' ),

        //             m("li", [
        //                 m("a[href='/0/1'].cd-navs", {config: m.route}, "Home",[
        //                     m("i.fa.fa-home.pull-left")
        //                 ])
        //             ])

        //         ])        
        //     ])
        // ]);



    }
}



//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

console.log(bootstrap)

m.routes( '/0/' + bootstrap.Accounts[0].id, {
    '/0/:aid' : {
        '#navigation' : navigation,
        '#account' : '',
        '#project' : '',
        '#task' : '',
        '#settings' : ''
    },  
    '/1/:aid/:pid' : {
        '#navigation' : navigation,
        '#account' : '',
        '#project' : project,
        '#task' : '',
        '#projectdetails' : '',
        '#settings' : '',
    },
    '/1/:aid/:pid/:cid' : {
        '#navigation' : navigation,
        '#account' : '',
        '#project' : project,
        '#task' : '',
        '#projectdetails' : '',
        '#settings' : '',
    },
    '/2/:aid/:pid' : {
        '#navigation' : navigation,
        '#account' : '',
        '#project' : project,
        '#projectdetails' : projectDetails,
        '#task' : '',
        '#settings' : '',
    },
    '/3/:aid/:pid/:tid' : {
        '#navigation' : navigation,
        '#account' : '',
        '#project' : project,
        '#projectdetails' : '',
        '#task' : task,
        '#settings' : '',
    },
    '/4/:aid' : {
        '#navigation' : navigation,
        '#account' : accounts,
        '#project' : '',
        '#projectdetails' : '',
        '#task' : '',
        '#settings' : '',
    },
    '/4/:aid/:any' : {
        '#navigation' : navigation,
        '#account' : '',
        '#account' : accountDetails,
        '#project' : project,
        '#projectdetails' : '',
        '#task' : '',
        '#settings' : '',
    },
    '/1000/:aid/:any' : {
        '#navigation' : navigation,
        '#account' : '',
        '#settings' : settings,
        '#project' : project,
        // '#task' : ''
    },
})


// m.route("/" + bootstrap.Accounts[0].id);






