import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import React from 'react';


export default class PageFooter extends React.Component {

    render() {
        return (<Footer
            columns={[
                {
                    items:[
                        {title:"Help"},
                        {title:"Community"},
                        {title:"Advisories"},
                        {title:"Status"}, 
                        {title:"Contact"}
                    ],
                    title: 'Support',
                    openExternal: true,
                },
                {
                    items:[
                        {title:"About"},
                        {title:"Blog"},
                        {title:"Press"}
                    ],
                    title: 'Company',
                    openExternal: true,
                }, 
                {
                    items:[
                        {title:"Policies"},
                        {title:"Terms of Use"},
                        {title:"Code of Conduct"},
                        {title:"Privacy"}, 
                    ],
                    title: 'Terms & Policies',
                    openExternal: true,
                }
               
            ]}
            backgroundColor="#3F51B5"
            bottom="Made with ❤️ by ikbalkazanc"
        />
        )
    }
}