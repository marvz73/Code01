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
};

todo.annotationList = function(){

    var json = [
        {id: 1, count: 1, axisX: '203px', axisY: '178px'},
        {id: 2, count: 2, axisX: '74px', axisY: '224px'},
        {id: 3, count: 3, axisX: '348px', axisY: '179px'},
        {id: 4, count: 4, axisX: '91px', axisY: '684px'},
        {id: 5, count: 5, axisX: '65px', axisY: '441px'}
    ];
    
    return m.prop(json);
}


todo.controller = function () {
    var self = this;

    var list = todo.annotationList();

    this.list = list();

    this.addAnnotaion = function () {
        self.list.push(m.prop({id: list.length + 1, count: 1, axisX: '23px', axisY: '25px'}))
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
                    
                    while(elm) {
                        console.log(elm.offsetLeft , elm.scrollLeft, elm.clientLeft);

                        xPosition += (elm.offsetLeft - elm.scrollLeft + elm.clientLeft);
                        yPosition += (elm.offsetTop - elm.scrollTop + elm.clientTop);
                        elm = elm.offsetParent;
                    }

                    // ctrl.list[tid].axisY = elm.offsetLeft + "px"
                    // ctrl.list[tid].axisX = elm.offsetTop + "px"
                    console.log(tid, xPosition, yPosition)



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
                            m("li", [
                                m("a", { onclick:  ctrl.addAnnotaion }, "Add Annotation")
                            ]),
                            m("li", [
                                m("a[href='#']", "Project 1")
                            ]),
                            m("li", [
                                m("a[href='#']", "Settings")
                            ]),
                            m("li", [
                                m("a[href='/route1']", {config: m.route}, "Home Test")
                            ])

                        ])        
                    ])
                ]),

                //pins annotation
                m("div.cd-product.cd-container", [
                    m("div#wrapper.cd-product-wrapper", [
                        m("ul", [

                            ctrl.list.map(function (annotation, index) {

                                return m("li#drag-drop.cd-single-point", {"data-index": index, style:{position: 'absolute', left: annotation.axisX,  top: annotation.axisY}, config: draggable}, [
                                    m("a[href='javascript:void(0)'].cd-btn#cd-btn", [
                                        m("i.fa.fa-map-marker" )
                                    ]),
                                    m("div.cd-more-info.cd-top")
                                ])
                            })

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

var page2 = {
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


//setup routes to start w/ the `#` symbol
m.route.mode = "hash";


m.routes( '/route1', {
    '/route1' : {
        '#app' : todo
    },
    '/task/:tid' : {
        '#app' : todo,
        '#innerview' : page2
    }
})
