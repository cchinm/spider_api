#!/usr/bin/env python 
# -*- coding:utf-8 -*- 
'''

 * @version: 0.0.0
 * @Company: 
 * @Author: samuel
 * @Date: 2020/9/19 11:48
 * @Last Modified by:   samuel
 * @Last Modified time: 2020/9/19 11:48
 * @Desc: spider_api
'''

from spider_api.libs.encrypts import hashlib


class PyMd5:

    def __init__(self):
        self.h = hashlib.md5()

    def encrypt(self, s: str):
        self.h.update(s.encode())
        return self

    def hex(self):
        return self.h.hexdigest()
