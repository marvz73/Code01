

var socket = io.connect('localhost:3000/' + bootstrap.Accounts[0].id);

var todo = {};
// var socket = io();
//for simplicity, we use this module to namespace the model classes

//the Todo class has two properties
todo.Todo = function (data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);
};

//the TodoList class is a list of Todo's
todo.TodoList = Array;


//the Todo class has two properties
todo.Todo = function (data) {
    this.description = m.prop(data.description);
    this.done = m.prop(false);

    this.projects = function(){
        return m.request({method:'get', url: baseUrl + '/api/v1/account/1/projects'});
    }

};

// todo.getProjectList = function() {
//     return m.request({method:'get', url: 'api/v1/account/' + m.route.param('aid') + '/projects'});
// };

todo.getProject = function() {
    return m.request({method:'get', url: baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project' + m.route.param('pid')});
};

todo.getTaskList = function() {
    return m.request({method:'get', url: baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project/' + m.route.param('pid') + '/tasks'});
};

todo.controller = function () {

    var self = this;

    // this.ProjectList = m.prop('');
    this.TaskList = m.prop('');
    // ProjectList.then(function(resp){
    //     console.log(12312)
    this.TaskList = todo.getTaskList();
    // })

    this.addTask = function (elm, init, context ) {
        var jsonData = {
            'desc' : '',
            'X': '23px',
            'Y': '25px'
        }
        m.request({method:'post', url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task', data: jsonData}).then(function(resp){
            self.TaskList().data.push(resp.data)
            // self.list.push(m.prop({id: list.length + 1, count: 1, axisX: '23px', axisY: '25px'}))
        })
    };
    
    this.updateTask = function(taskData){

        var jsonData = {
            Y: taskData.Y,
            X: taskData.X
        }

        m.request({method:'post', url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + taskData.id, data: jsonData }).then(function(resp){
            // self.list.push(resp.data)
        })
    };



    // socket.on('connect', function () {
    //     socket.emit('getBootstrap', function(data){
    //         console.dir(data);
    //     })
    // });

    // this.description = m.prop("");
    // this.done = m.prop(false);
    // this.editMode = m.prop(false);

    // this.add = function () {
    //     if (self.description()) {
    //         self.list.push(new todo.Todo({
    //             description: self.description(),
    //             done: self.done()
    //         }));
    //         self.description("");
    //     }
    // };


/*
 * ----------- HELPERS -----------
 */

    this.addClass = function(element, classToAdd) {
        var currentClassValue = element.className;
          
        if (currentClassValue.indexOf(classToAdd) == -1) {
            if ((currentClassValue == null) || (currentClassValue === "")) {
                element.className = classToAdd;
            } else {
                element.className += " " + classToAdd;
            }
        }
    }

    this.removeClass = function(element, classToRemove) {
        var currentClassValue = element.className;
        if (currentClassValue == classToRemove) {
            element.className = "";
            return;
        }
        var classValues = currentClassValue.split(" ");
        var filteredList = [];
        for (var i = 0 ; i < classValues.length; i++) {
            if (classToRemove != classValues[i]) {
                filteredList.push(classValues[i]);
            }
        }
        element.className = filteredList.join(" ");
    }

    this.on = function(element, evnt, fn){
        element.addEventListener(evnt, fn);
    }

    this.is = function(elm){

        var span = document.getElementById("mySPAN");
        var div = document.getElementById("myDIV").contains(span);
    }


};

//here's the view
todo.view = function (ctrl) {



    // function showRightModal(elm, init, context){

    //     if( !init ){
    //         document.getElementById("cd-panel").className += " is-visible";
    //     }

    // }

    // function hideRightModal(elm, init, context){
    //     if( !init ){
    //         var strClass = elm.target.className;
    //         if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
    //             document.getElementById("cd-panel").className = "cd-panel from-right";
    //         }
    //     }
    // }

    return m("div", [

                //pins annotation
                m("div.cd-product.cd-container", [
                    m("div#wrapper.cd-product-wrapper", [
                        m("ul", [
                            ((ctrl.TaskList.length) ? taskList() : '' )
                        ]),

                        //Project images
                        m("img[src='./images/cd-app-image.jpg']")
                    ])
                ]),


                // rightModal()

                // m("input", {
                //     onkeyup: ctrl.fireOnEnter,
                //     value: ctrl.description()
                // }),
                // m("button", {
                //     onclick: ctrl.add,
                //     style: {display: ctrl.editMode() ? 'none': 'inline-block' }
                // }, "Add"),
                // m("button", {
                //     onclick: ctrl.editUpdate,

                //     style: {display: !ctrl.editMode() ? 'none': 'inline-block' }
                // }, "Edit"),

                // m("button", {
                //     onclick: ctrl.changeInput
                // }, "Change"),

                // m("table", [
                //     ctrl.list.map(function (task, index) {
                //             return m("tr", [

                //             m("td", [

                //               m("input[type='checkbox']",  {
                //                 onclick: m.withAttr("checked", task.done),
                //                 checked: task.done()
                //                 })
                //             ]),

                //             m("td",  {style: {textDecoration: task.done() ? "line-through" : "none"}, onclick: ctrl.editInit.bind({i:index}),  onclick: this.focus()}, task.description()), ]);
                        
                //     })
                // ]);

    ]);
};

//initialize the application
// m.module(document.getElementById('app'), todo);











var task = {
    controller: function() {

        var self = this;

        this.TaskDetails = {};
        this.TaskComments = [];

        //Fetch task details
        m.request({
            method:'get', 
            url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid')
        })
        .then(function(resp){
            self.TaskDetails = resp.data;
        }).then(function(){
            m.request({
                method: 'get',
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid') + '/comments'
            }).then(function(commentsResp){
                self.TaskComments = commentsResp.data;
            });
        });

        //Task comment observ
        socket.on('taskCommentCreate', function(data){
            self.TaskComments.push(data);
            m.redraw(true)
        })

        //Add Comment
        this.addComment = function(jsonData){
             m.request({
                method: 'post',
                data: jsonData,
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid') + '/comment'
            });
        }

        this.updateTaskDesc = function(jsonData){
          m.request({
                method: 'post',
                data: jsonData,
                url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + m.route.param('tid')
            });
        }

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
                        console.log(1)

                        Q('.cd-panel').timer(500, function(){
                            m.route('/1/'+ m.route.param('aid') + '/' + m.route.param('pid'))
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
                    ctrl.addComment(jsonData);
                    elm.target.value = '';
                }
            }
        }

        return  m("div.cd-panel.from-right#cd-panel", {config: loaded, onclick: hideRightModal}, [
                    m("header.cd-panel-header.no-touch",[
                        m("input[type='text'][value='"+ctrl.TaskDetails.id+"'].title#taskTitle"),
                        m("a.cd-panel-close", {onclick: hideRightModal}, "Close")
                    ]),
                    m("div.cd-panel-container", [
                        m("div.cd-panel-content", [
                            
                            m('form', [
                                m('textarea[rows="10"][placeholder="Description here..."]#taskDesc.form-control', ctrl.TaskDetails.desc)
                            ]),
                            m('br'),
                            m('div.clearfix', [

                                ctrl.TaskComments.map(function(val, index){
                                
                                    return m('div.media', [
                                        m('div.media-left', [
                                            m('a[href="#"]', [
                                                m('img[width="60px"][height="60px"][src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PGRlZnMvPjxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjEzLjgxMjUiIHk9IjMyIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+NjR4NjQ8L3RleHQ+PC9nPjwvc3ZnPg=="]')
                                            ])
                                        ]),
                                        m('div.media-body', [
                                            m('h5.media-heading', 'First Name'),
                                            m('small', val.comment)
                                        ])
                                    ])
                                })



                            ]),
                            m('hr'),
                            m('input[placeholder="Comment here...."].form-control#taskComment', {onkeypress: addComment})
                            






                            // m("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magnam accusamus obcaecati nisi eveniet quo veniam quibusdam veritatis autem accusantium doloribus nam mollitia maxime explicabo nemo quae aspernatur impedit cupiditate dicta molestias consectetur, sint reprehenderit maiores. Tempora, exercitationem, voluptate. Sapiente modi officiis nulla sed ullam, amet placeat, illum necessitatibus, eveniet dolorum et maiores earum tempora, quas iste perspiciatis quibusdam vero accusamus veritatis. Recusandae sunt, repellat incidunt impedit tempore iusto, nostrum eaque necessitatibus sint eos omnis! Beatae, itaque, in. Vel reiciendis consequatur saepe soluta itaque aliquam praesentium, neque tempora. Voluptatibus sit, totam rerum quo ex nemo pariatur tempora voluptatem est repudiandae iusto, architecto perferendis sequi, asperiores dolores doloremque odit. Libero, ipsum fuga repellat quae numquam cumque nobis ipsa voluptates pariatur, a rerum aspernatur aliquid maxime magnam vero dolorum omnis neque fugit laboriosam eveniet veniam explicabo, similique reprehenderit at. Iusto totam vitae blanditiis. Culpa, earum modi rerum velit voluptatum voluptatibus debitis, architecto aperiam vero tempora ratione sint ullam voluptas non! Odit sequi ipsa, voluptatem ratione illo ullam quaerat qui, vel dolorum eligendi similique inventore quisquam perferendis reprehenderit quos officia! Maxime aliquam, soluta reiciendis beatae quisquam. Alias porro facilis obcaecati et id, corporis accusamus? Ab porro fuga consequatur quisquam illo quae quas tenetur.")
                        ])
                    ])
                ])
    }
}


var project = {
    controller: function() {
        var self = this;

        socket.emit('switchRoom', m.route.param('pid'))

        this.TaskList = [];

        //Task create observ
        socket.on('taskCreate', function(data){
            console.log("Task Create event fired::", data);
            // console.log(self.TaskList)
            self.TaskList.push(data)
            m.redraw(true)
        })  

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
        })

        //Fetch project task
        m.request({
            method:'get', 
            url:  baseUrl + '/api/v1/account/' + m.route.param('aid') + '/project/' + m.route.param('pid') + '/tasks'
        }).then(function(taskResp){
            if(taskResp.data.length){
                self.TaskList = taskResp.data;
            }
        });

        //Update task position
        this.updateTask = function(taskData){
            console.log(123)
            var jsonData = {
                Y: taskData.Y,
                X: taskData.X
            }

            m.request({method:'post', url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task/' + taskData.id, data: jsonData })
        
        };

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
                            m.route('/2/' + m.route.param('aid') + '/' + m.route.param('pid') + '/' + tid)
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

        function taskList(elm, init, context){
            if(!init){
                return ctrl.TaskList.map(function (t, index) {
                    return m("li#drag-drop.cd-single-point", {"data-id": t.id, "data-index": index, style:{position: 'absolute', left: t.X,  top: t.Y}, config: draggable}, [
                        m("a[href='javascript:void(0)'].cd-btn#cd-btn", [
                            m("i.fa.fa-map-marker" )
                        ]),
                        m("div.cd-more-info.cd-top")
                    ])
                })
            }
        }

        return m("div", [
                    //pins annotation
                    m("div.cd-product.cd-container", [
                        m("div#wrapper.cd-product-wrapper", [
                            m("ul", [
                                ((ctrl.TaskList.length) ? taskList() : '' )
                            ]),

                            //Project images
                            m("img[src='" + baseUrl + "/images/cd-app-image.jpg']")
                        ])
                    ])
                ]);
    }
}

var settings = {
    controller: function() {


        this.getUserDetails = function(){
            m.request({method:'get', url: baseUrl + '/api/v1/user/' + bootstrap.Accounts[0].AccountUser.UserId })
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
                        m("div.cd-panel-content",[
                            m('fieldset.settings',[
                                m('legend', "Personal Details"),
                                m('div.settings-group', [
                                    m('input.form-control[type="text"][placeholder="Email"]'),
                                    m('input.form-control[type="text"][placeholder="First Name"]'),
                                    m('input.form-control[type="text"][placeholder="Last Name"]')
                                ]),

                                m('legend', "Password Details"),
                                m('div.settings-group', [
                                    m('input.form-control[type="text"][placeholder="Old Password"]'),
                                    m('input.form-control[type="text"][placeholder="New Password"]'),
                                    m('input.form-control[type="text"][placeholder="Confirm Password"]')
                                ])

                            ])
                        ])
                    ])
                ])
    }
}

var navigation = {
    controller: function() {
        var self = this;
        this.ProjectList = [];

        socket.on('projectCreate', function(data){
             self.ProjectList.push(data);
             m.redraw(true);
        });

        m.request({method:'get', url: baseUrl + '/api/v1/account/' +bootstrap.Accounts[0].id + '/projects'}).then(function(projectResp){
            if(projectResp.data.length)
            {
                if(m.route.param('pid') == 0){
                    // m.route('/0/1/' + projectResp.data[0].id)
                }

                self.ProjectList = projectResp.data;
            }
        });

        this.addTask = function (elm, init, context ) {

            var jsonData = {
                'desc' : '',
                'X': '23px',
                'Y': '25px'
            }

            m.request({method:'post', url: baseUrl + '/api/v1/account/' +m.route.param('aid')+ '/project/' +m.route.param('pid')+ '/task', data: jsonData});

        };

        this.addProject = function () {
            return m.request({method:'post', url: baseUrl + '/api/v1/account/1/project', data: {title: 'Project Title'}})
        };
    
    },
    view: function(ctrl) {

        //Get project list
        function projectList(elm, init, context){
            if(!init)
            {
                return ctrl.ProjectList.map(function (val, index) {
                    return m("li", [
                        m("a[href='/1/" + val.AccountId + '/' +val.id+ "']", {config: m.route }, val.title)
                    ])
                })     
            }
        }

        //Navigation Menu
        return m("#cd-nav", [
            m("a[href='javascript:void(0)'].cd-nav-trigger", {}, "Menu",[
                m("span","")
            ]),
            m("nav#cd-main-nav", [
                
                m("ul", [

                    ((ctrl.ProjectList.length) ? projectList() : '' ),

                    m("li", [
                        m("a", { onclick:  ctrl.addTask }, "Add Pin")
                    ]),
                    m("li", [
                        m("a[href='#']", {onclick: ctrl.addProject}, "Add Project")
                    ]),
                    m("li", [
                        m("a[href='/1000/"+m.route.param('aid')+"']",{config: m.route}, "Settings")
                    ]),
                    m("li", [
                        m("a[href='/0/1']", {config: m.route}, "Home")
                    ])

                ])        
            ])
        ])
    }
}



//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

console.log(bootstrap.Accounts[0]);

m.routes( '/0/' + bootstrap.Accounts[0].id, {
    '/0/:aid' : {
        '#navigation' : navigation,
        '#project' : '',
        '#task' : '',
        '#settings' : ''
    },  
    '/1/:aid/:pid' : {
        '#navigation' : navigation,
        '#project' : project,
        '#task' : '',
        '#settings' : '',
    },
    '/2/:aid/:pid/:tid' : {
        '#navigation' : navigation,
        '#project' : project,
        '#task' : task,
        '#settings' : '',
    },
    '/1000/:aid' : {
        '#navigation' : navigation,
        '#settings' : settings,
        // '#project' : project,
        // '#task' : task
    },
})


// m.route("/" + bootstrap.Accounts[0].id);