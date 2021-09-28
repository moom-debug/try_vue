import VueRouter from "vue-router";
import Control1 from '../components/control/control1';
import Control1_span1 from '../components/control/right/control1_span1'
import Control1_span2 from '../components/control/right/control1_span2'
import Control1_span3 from '../components/control/right/control1_span3'
import Control1_span4 from '../components/control/right/control1_span4'
import conspli1 from '../components/control/right/list/con_sp_li1'
import Index from '../components/index'
import Center from '../components/center/control1';
import Center_span1 from '../components/center/right/control1_span1'
import Center_span2 from '../components/center/right/control1_span2'
import Center_span3 from '../components/center/right/control1_span3'
import Teacher from '../components/teacher/control1';
import Teacher_span1 from '../components/teacher/right/control1_span1'
import Teacher_span2 from '../components/teacher/right/control1_span2'
import Teacher_span3 from '../components/teacher/right/control1_span3'
import Comon from '../components/comon'
import Message from '../components/message'

export default new VueRouter({
    routes:[
        {
          path:'/comon',
          component:Comon
        },
        {
          path:'/message',
          component:Message
        },
        {
            path:'/control1',
            component:Control1,
            children:[
                
                   {
                     path:'control1_span1',
                     name:"conspa1",
                     component:Control1_span1
                   },
                   {
                    path:'control1_span2',
                    name:"conspa2",
                    component:Control1_span2
                  },
                  {
                    path:'control1_span3',
                    name:"conspa3",
                    component:Control1_span3,
                    children:[
                      {
                        path:'con_sp_li1',
                        name:"conspali1",
                        component:conspli1
                      }
                    ]
                  },
                  {
                    path:'control1_span4',
                    name:"conspa4",
                    component:Control1_span4
                  },
                ]
            },
            {
              path:"/index",
              component:Index
            },
            {
              path:'/center',
              component:Center,
              children:[
                  
                     {
                       path:'center_span1',
                       name:"center1",
                       component:Center_span1
                     },
                     {
                      path:'center_span2',
                      name:"center2",
                      component:Center_span2
                    },
                    {
                      path:'center_span3',
                      name:"center3",
                      component:Center_span3,
                    },
                  ]
              },
              {
                path:'/teacher',
                component:Teacher,
                children:[
                    
                       {
                         path:'teacher_span1',
                         name:"teacher1",
                         component:Teacher_span1
                       },
                       {
                        path:'teacher_span2',
                        name:"teacher2",
                        component:Teacher_span2
                      },
                      {
                        path:'teacher_span3',
                        name:"teacher3",
                        component:Teacher_span3,
                      },
                    ]
                },
        ],
       

    
})