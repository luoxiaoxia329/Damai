
        function main(){
//            用户注册时：限制用户名称必须是6-20位字符
               var _account=document.getElementById("account").value;//bug
               for(var i=0;i<_account.length;i++){
                   if(_account[i]==="@"){
              
                   }
                   if(_account[i]==="`/？;:"'.~!@#$%^&*()-=+#"){
              
                   }
               }

            document.getElementById("btn").onclick=function(){
                var _account=document.getElementById("account").value;//bug
                   var _reg=/^\w{6,20}$/g;//test()方法返回值：boolean类型值
                  _account="12!@#$%^dfghj";
                  _account="1234512345123451234512345";
                   if(/12345/g.test(_account)){
                       var _arr=_account.match(/12345/g);
                       console.log(_arr[0]);
                   }

                   if(_reg.test(_account)){
                       alert("success");
                   }else{
                       alert("error");
                   }

                   var _reg=/[a-zA-Z]+/g;
                   console.log(_account.split(_reg));
                   console.log(_account.split(""));//不用正则表达式无法下手了


                   var _reg=/\W+/g;
                   if(_reg.test(_account)){
                       alert("有特殊字符");
                       console.log(_account.replace(_reg,""));
                   }else{
                       alert("success");
                   }
                var _reg=/(good)(\w+)good/g;
                console.log(_account.match(_reg));
            }
        
        window.onload=main;
