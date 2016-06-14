function getStyle(obj,name)
{
  if(obj.currentStyle)
  {
    return obj.currentStyle[name];
  }
  else
  {
    return getComputedStyle(obj,false)[name];
  };
};

function startMove(obj, json, fnEnd)
{
  clearInterval(obj.timer);
  
  obj.timer=setInterval(function(){
    for(attr in json)
    {
        var curr=0;
        var bStop=true;
        if(attr=='opacity')
        {
          curr=Math.round(parseFloat(getStyle(obj,attr))*100);
        }
        else
        {
          curr=parseInt(getStyle(obj,attr));
        }
        
        var speed=(json[attr]-curr)/10;
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        
        if(curr!=json[attr])
            bStop=false;
   
        if(attr=='opacity')
        {
            obj.style.filter='alpha(opacity:'+(curr+speed)+')';
            obj.style.opacity=(curr+speed)/100;
        }
        else
        {
            obj.style[attr]=curr+speed+'px';            //此处为什么用[]来代替"."？而且经测试，这个地方不用[]的时候就没法出现想要的效果。
        }

        if(bStop)
        {
          clearInterval(obj.timer);
          if(fnEnd)fnEnd();
        }
    }
  },30)
}