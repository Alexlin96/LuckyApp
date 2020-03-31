/*
 * @Autor: alexlin
 * @Date: 2020-03-30 15:32:13
 * @Version: xxx.v1.0
 * @LastEditTime: 2020-03-30 15:33:28
 * @Description: 工具函数
 */

export const isMobile = () => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true;
  } else {
    return false;
  }
};
