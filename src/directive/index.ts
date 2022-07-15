const throttle =  {
  mounted(el:any, binding:any) {
    let time = binding.value || 2000;
    let timer:any=null;
    el.addEventListener(
      "click",
      (event:any) => {
        if (!timer) {
          // 第一次执行
          timer = setTimeout(() => {
            timer = null;
          }, time);
        } else {
          event && event.stopImmediatePropagation();
        }
      },
      true
    );
  },
}
const debounce =  {
  mounted(el:any, binding:any) {
    let time = binding.value.time || 2000;
    let timer:any = null;
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer=setTimeout(() => {
        binding.value.fn()
      }, time);
    });
  },
};
const drag= {
  mounted(el:any) {
    el.onmousedown = (e:any) => {
      let x = e.clientX - el.offsetLeft;
      let y = e.clientY - el.offsetTop;
      document.onmousemove = (e) => {
        let xx = e.clientX - x + 'px';
        let yy = e.clientY - y + 'px';
        el.style.left = xx;
        el.style.top = yy;
      };
      el.onmouseup = () => {
        document.onmousemove = null;
      };
    };
  },
};
export { throttle, debounce ,drag};