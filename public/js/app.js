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
        return m.request({method:'get', url: 'api/v1/account/1/projects'});
    }

};

todo.getProjectList = function() {
    return m.request({method:'get', url: 'api/v1/account/1/projects'});
};

todo.getTaskList = function() {
    return m.request({method:'get', url: 'api/v1/account/1/project/1/tasks'});
};

todo.controller = function () {

    var self = this;

    var ProjectList = todo.getProjectList();

    ProjectList.then(function(resp){
        if(resp.data.length)
        {
            self.ProjectList = resp.data;
        }else{
            self.ProjectList = m.prop();
        }
    })
    
    // this.ProjectList = m.prop('');

    // ProjectList.then(function(resp){
    //     console.log(12312)
    // // this.TaskList = todo.getTaskList();
    // })

    this.addTask = function (elm, init, context ) {
        var jsonData = {
            'desc' : '',
            'X': '23px',
            'Y': '25px'
        }
        m.request({method:'post', url: 'api/v1/account/1/project/1/task', data: jsonData}).then(function(resp){
            self.TaskList().data.push(resp.data)
            // self.list.push(m.prop({id: list.length + 1, count: 1, axisX: '23px', axisY: '25px'}))
        })
    };
    
    this.updateTask = function(taskData){
        console.log(taskData)
        var jsonData = {
            Y: taskData.Y,
            X: taskData.X
        }

        m.request({method:'post', url: 'api/v1/account/1/project/1/task/' + taskData.id, data: jsonData }).then(function(resp){
            // self.list.push(resp.data)
        })
    };

    this.addProject = function () {
        return m.request({method:'post', url: 'api/v1/account/1/project', data: {title: 'prorject 1'}})
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

                    var tid = this.getAttribute("data-index");

                    if(dragged){
                        m.route('/task/' + tid)
                        // console.log(ctrl.list[0])
                    }
                    
                    var xPosition = 0;
                    var yPosition = 0;
                    var elm = element;
                    console.log(tid, element.offsetLeft, element.offsetTop)
                    ctrl.updateTask({id: tid, X: element.offsetLeft + 'px', Y: element.offsetTop + 'px'});



                },
                drag: function(){
                    dragged = 0;
                    console.log('draggedx')
                     $('.cd-btn').unbind('click')
                }
            });


        }
    }

    function showRightModal(elm, init, context){

        if( !init ){
            document.getElementById("cd-panel").className += " is-visible";
        }

    }

    function hideRightModal(elm, init, context){
        if( !init ){
            var strClass = elm.target.className;
            if(strClass.indexOf('cd-panel') == 0 || strClass.indexOf('cd-panel-close') == 0){
                document.getElementById("cd-panel").className = "cd-panel from-right";
            }
        }
    }

    return m("div", [

                //Navigation Menu
                m("#cd-nav", [
                    m("a[href='javascript:void(0)'].cd-nav-trigger", {}, "Menu",[
                        m("span","")
                    ]),
                    m("nav#cd-main-nav", [
                        
                        

                        m("ul", [
                            // ctrl.ProjectList.map(function (val, index) {
                            //     return m("li", [
                            //         m("a[href='/1/" + m.route.param("aid") + '/' +val.id+ "']", {config: m.route }, val.title)
                            //     ])
                            // }),

                            m("li", [
                                m("a", { onclick:  ctrl.addTask }, "Add Annotation")
                            ]),
                            m("li", [
                                m("a[href='#']", {onclick: ctrl.addProject}, "Add Project")
                            ]),
                            m("li", [
                                m("a[href='#']", "Settings")
                            ]),
                            m("li", [
                                m("a[href='/route1']", {config: m.route}, "Home")
                            ])

                        ])        
                    ])
                ]),

                //pins annotation
                m("div.cd-product.cd-container", [
                    m("div#wrapper.cd-product-wrapper", [
                        m("ul", [

                   
                                // ctrl.TaskList().data.map(function (t, index) {

                                //     return m("li#drag-drop.cd-single-point", {"data-index": t.id, style:{position: 'absolute', left: t.X,  top: t.Y}, config: draggable}, [
                                //         m("a[href='javascript:void(0)'].cd-btn#cd-btn", [
                                //             m("i.fa.fa-map-marker" )
                                //         ]),
                                //         m("div.cd-more-info.cd-top")
                                //     ])
                                // })
                            

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

var rightModal = function(){
    //Right dialog box

}

var task = {
    controller: function() {
        this.id = m.route.param("tid");
    },
    view: function(controller) {
        function loaded(){
            console.log(controller.id)
        }
        return  m("div.cd-panel.from-right#cd-panel", {config: loaded}, [
                    m("header.cd-panel-header.no-touch",[
                        m("h1", "TItle Goes Here"),
                        m("a.cd-panel-close", "Close")
                    ]),
                    m("div.cd-panel-container", [
                        m("div.cd-panel-content", [
                            m("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magnam accusamus obcaecati nisi eveniet quo veniam quibusdam veritatis autem accusantium doloribus nam mollitia maxime explicabo nemo quae aspernatur impedit cupiditate dicta molestias consectetur, sint reprehenderit maiores. Tempora, exercitationem, voluptate. Sapiente modi officiis nulla sed ullam, amet placeat, illum necessitatibus, eveniet dolorum et maiores earum tempora, quas iste perspiciatis quibusdam vero accusamus veritatis. Recusandae sunt, repellat incidunt impedit tempore iusto, nostrum eaque necessitatibus sint eos omnis! Beatae, itaque, in. Vel reiciendis consequatur saepe soluta itaque aliquam praesentium, neque tempora. Voluptatibus sit, totam rerum quo ex nemo pariatur tempora voluptatem est repudiandae iusto, architecto perferendis sequi, asperiores dolores doloremque odit. Libero, ipsum fuga repellat quae numquam cumque nobis ipsa voluptates pariatur, a rerum aspernatur aliquid maxime magnam vero dolorum omnis neque fugit laboriosam eveniet veniam explicabo, similique reprehenderit at. Iusto totam vitae blanditiis. Culpa, earum modi rerum velit voluptatum voluptatibus debitis, architecto aperiam vero tempora ratione sint ullam voluptas non! Odit sequi ipsa, voluptatem ratione illo ullam quaerat qui, vel dolorum eligendi similique inventore quisquam perferendis reprehenderit quos officia! Maxime aliquam, soluta reiciendis beatae quisquam. Alias porro facilis obcaecati et id, corporis accusamus? Ab porro fuga consequatur quisquam illo quae quas tenetur.")
                        ])
                    ])
                ])
    }
}


var project = {
    controller: function() {
        this.id = m.route.param("tid");
    },
    view: function(controller) {
        function loaded(){
            console.log(controller.id)
        }
        return  m('h1', 'Projects')
    }
}


//setup routes to start w/ the `#` symbol
m.route.mode = "hash";

m.routes( '/0/'+bootstrap.Accounts[0].id + '/0', {
    '/0/:aid/:pid' : {
        '#app' : todo,
        '#project' : project
    },
    '/1/:aid/:pid/:tid' : {
        '#app' : todo,
        '#task' : task
    }
})


// m.route("/" + bootstrap.Accounts[0].id);