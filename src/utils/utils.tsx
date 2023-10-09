    export  const setTabColor = (screen: string)=>{
        let tabColor:string='';
        if(screen === "First"){
            tabColor = '#0b1f51'
        }else if (screen === 'Second'){
            tabColor = '#4530b3'
        }else if (screen === 'Third'){
            tabColor = '#5451d6'
        }
        return tabColor;
    }
