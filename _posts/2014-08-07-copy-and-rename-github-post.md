---
layout: post
title: "ʹ��Python�Զ����ƺ��������ı�"
date: 2014-08-07 14:14
comments: true
categories: 
- blog
tags:
- �Զ�����
---

��ϲ������ҳ�˸���github�ϵ���־��ͨ������ֻ��ʾcategoriesΪblog���ĵ����ҿ���ÿ���޸�һ�㶫������ȫ����ҳ��д��־��

���ָо��ǳ��ã�ͼƬ����ʲô�Ŀ��Է�����ţ��վ���о��ǳ��á�

���������������ƺ�������1000��md�ı���python���룺

		# -*- coding: utf-8 -*-
		"""
		Created on Thu Aug 07 14:05:09 2014

		@author: chengjun
		"""

		import shutil
		path = "D:/github/chengjun.github.io/_posts/"   

		demo = path + "2010-01-01-demo.md"

		for i in range(1000):
			newFile = path + "2010-01-" + str(i) + ".md"
			print newFile
			shutil.copy(demo, newFile)

