/*
* @Author: mark
* @Date:   2016-09-27 17:33:45
* @Last Modified by:   mark
* @Last Modified time: 2016-10-08 15:25:37
*/

var Api = {

    //API_URL : 'http://m.api.hunantv.com/channel/getDetail',

    fetchApi : function(params) {

        var _this = this;

        return new Promise((resolve,reject) => {
            wx.request({
              url: params.API_URL,
              data:Object.assign({}, params.data),
              header: {
                'Content-Type': 'application/json'
              },
              success: resolve,
              fail: reject 
            })
        })

    },

    result : function (params) {

        var _this = this;

        return _this.fetchApi(params).then( res => res)

    }

}


module.exports = Api;
