#!/usr/bin/env python 
# -*- coding:utf-8 -*- 
'''

 * @version: 0.0.0
 * @Company: 
 * @Author: zhanming.zhang 
 * @Date: 2020/9/17 17:24
 * @Last Modified by:   zhanming.zhang 
 * @Last Modified time: 2020/9/17 17:24
 * @Desc: spider_api
'''
import re

from requests.structures import CaseInsensitiveDict
from spider_api.libs.loginAccounts.baseLogin import BaseLogin
from spider_api.libs.loginAccounts.browParams import default_ua


class TaobaoLogin(BaseLogin):

    @staticmethod
    def __prepare_session(sess):
        sess.headers = CaseInsensitiveDict({
        'User-Agent': default_ua(),
        'Accept-Encoding': ', '.join(('gzip', 'deflate')),
        'Accept': '*/*',
        'Connection': 'keep-alive',
        })
        return sess

    def processLogin(self):

        prepare_url = "https://login.taobao.com/member/login.jhtml"
        resp = self.sess.get(url=prepare_url)

        search_xx = lambda x, y: x.search(y)
        search_group_if_exist = lambda x: x.group(1) if x else None

        re_csrf_tk = re.compile('"_csrf_token":"(\w+)"')
        re_umid_tk = re.compile('"umidToken":"(\w+)"')
        re_hsiz = re.compile('"hsiz":"(\w+)"')
        resp_text = resp.text

        csrf_tk = search_group_if_exist(search_xx(re_csrf_tk, resp_text))
        umid_tk = search_group_if_exist(search_xx(re_umid_tk, resp_text))
        hsiz = search_group_if_exist(search_xx(re_hsiz, resp_text))

        form_data = dict(
            keepLogin='false',
            umidGetStatusVal='255',
            screenPixel='1920x1080',
            navlanguage='zh-CN',
            navUserAgent='',
            navPlatform='Win32',
            appName='taobao',
            appEntrance='taobao_pc',
            bizParams='',
            style='default',
            appkey='00000000',
            isMobile='false',
            lang='zh_CN',
            returnUrl='',
            fromSite='0',
            _csrf_token=csrf_tk,
            umidToken=umid_tk,
            hsiz=hsiz
        )
        form_data['from']='tb'
        resp = self.sess.post(url=self.login_url, data=form_data)
        print(resp.url)
        print(resp.text)

        if resp.url.find("login") == -1 :
            resp_json = resp.json()
            self.sess.get(url=resp_json['content']['data']['asyncUrls'][0])
        resp = self.sess.get(url=self.target_url)
        print(resp.url)
        print(self.sess.cookies.to_dict())


if __name__ == '__main__':
    tb = TaobaoLogin(username=1,
                     password=1,
                     cid=1,
                     login_url='https://login.taobao.com/newlogin/login.do?appName=taobao&fromSite=0',
                     target_url='https://mai.taobao.com/seller_admin.htm')
    tb.processLogin()


