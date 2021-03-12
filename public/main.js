let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET",`/page${n+1}`);
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            const array = JSON.parse(request.response);
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id;
                xxx.appendChild(li);
            });
            n += 1;
        }
    };
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/5.json");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            //将符合JSON语法的字符串转换为对象
            const object = JSON.parse(request.response);
            myName.textContent = object.name;
        }
    };
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange = () =>{
        if(request.readyState === 4 && request.status>=200 && request.status < 300){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () =>{
        //下载完成，但是不知道是成功2xx 还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status>=200 && request.status < 300){
                // 创建style标签
                const style = document.createElement('style');
                // 填写style内容
                style.innerHTML = request.response;
                // 将style插入到head
                document.head.appendChild(style);
            }
        }else{
            alert('加载 CSS 失败')
        }
    };
    request.open("GET","/style.css"); //readyState = 1
    request.send();//readyState = 2
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET',"/2.js");
    request.onload = () => {
        const script = document.createElement('script');
        script.innerHTML = request.response;
        document.head.appendChild(script);
    };
    request.onerror = () =>{
        console.log('失败');
    };
    request.send();
};

getHTML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/3.html');
    request.onload = () =>{
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
    };
    request.onerror = () =>{
        console.log('失败');
    };
    request.send();
};