function Drag(id){
    var _this=this;
    this.disX=0;
    this.disY=0;
    this.oDiv=document.getElementById(id);
    this.oDiv.onmousedown=function (ev){
        _this.mouseDown(ev);
        return false;
    }
};

Drag.prototype.mouseDown=function (ev){
    var _this=this;
    var oEvent=ev||event;
    this.disX=oEvent.clientX-this.oDiv.offsetLeft;
    this.disY=oEvent.clientY-this.oDiv.offsetTop;

    document.onmousemove=function (ev){
        _this.mouseMove(ev);
    };
    document.onmouseup=function (ev){
        _this.mouseUp();
    };
};

Drag.prototype.mouseMove=function (ev){
    var oEvent=ev||event;
    this.oDiv.style.left=oEvent.clientX-this.disX+'px';
    this.oDiv.style.top=oEvent.clientY-this.disY+'px';
};

Drag.prototype.mouseUp=function (){
    document.onmousemove=null;
    document.onmouseup=null;
};
