#!/usr/bin/env python 
# -*- coding:utf-8 -*- 
'''

 * @version: 0.0.0
 * @Company: 
 * @Author: zhanming.zhang 
 * @Date: 2020/9/19 13:46
 * @Last Modified by:   zhanming.zhang 
 * @Last Modified time: 2020/9/19 13:46
 * @Desc: spider_api
'''

import base64
from Crypto.Cipher import PKCS1_v1_5
from Crypto.PublicKey import RSA

public_key = """-----BEGIN PUBLIC KEY-----
{rsaPublicKey}
-----END PUBLIC KEY-----"""


class PyRsa:
    rsaPublicKey = None
    cipherText = None

    def __init__(self):
        self.cipher = None

    def setPublicKey(self, rsa_public_key):
        rsa_key = RSA.importKey(extern_key=public_key.format(rsaPublicKey=rsa_public_key))
        self.cipher = PKCS1_v1_5.new(rsa_key)

    def encrypt(self, s: str):
        self.cipherText = self.cipher.encrypt(s.encode())
        return self

    def base64(self):
        return base64.b64encode(self.cipherText)

    def hex(self):
        return self.cipherText.hex()
