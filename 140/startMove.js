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

function startMove(obj, attr, iTarget, fnEnd)
{
  clearInterval(obj.timer);
  
  obj.timer=setInterval(function(){
    var curr=0;
    if(attr=='opacity')
    {
      curr=parseFloat(getStyle(obj,attr))*100;
    }
    else
    {
      curr=parseInt(getStyle(obj,attr));
    }
    
    var speed=(iTarget-curr)/6;
    speed=speed>0?Math.ceil(speed):Math.floor(speed);
    
    if(curr==iTarget)
    {
      clearInterval(obj.timer);
      if(fnEnd)fnEnd();
    }
    else
    {
      if(attr=='opacity')
      {
        obj.style.filter='alpha(opacity:'+(curr+speed)+')';
        obj.style.opacity=(curr+speed)/100;
      }
      else
      {
        obj.style[attr]=curr+speed+'px';            //此处为什么用[]来代替"."？而且经测试，这个地方不用[]的时候就没法出现想要的效果。
      }
    };
  },30)
}