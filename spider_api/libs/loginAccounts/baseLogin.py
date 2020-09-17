#!/usr/bin/env python 
# -*- coding:utf-8 -*- 
'''

 * @version: 0.0.0
 * @Company: 
 * @Author: zhanming.zhang 
 * @Date: 2020/9/17 17:20
 * @Last Modified by:   zhanming.zhang 
 * @Last Modified time: 2020/9/17 17:20
 * @Desc: spider_api
'''

import requests


class BaseLogin:

    __slots__ = ("sess", "username", "password", "cid", "login_url", "target_url", "_url")


    def __init__(self, username, password, cid, login_url, target_url):
        self.sess = self.initSession()
        self.username = username
        self.password = password
        self.cid = cid
        self.login_url = login_url
        self.target_url = target_url
        self._url = ''

    def initSession(self):
        sess = requests.Session()
        sess = self.__prepare_session(sess=sess)
        return sess

    @staticmethod
    def __prepare_session(sess):
        return sess

    def processLogin(self):
        pass

    def login(self) -> bool:
        pass

    @property
    def cookies(self):
        return

    def checkJumpUrlIfMatch(self, chk_url) -> bool:

        if chk_url is None:
            chk_url = self.target_url

        return self._url.find(chk_url) > -1

    def saveCookiesInRedisIfOk(self) -> bool:
        print(self._url)
        return True
