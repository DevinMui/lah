import json
import string
import random
import requests
import urllib2
import imghdr
import time
from BeautifulSoup import BeautifulSoup

sock = urllib2.urlopen("https://github.com/JMteam09/EasyMail")
print sock.read()
sock.close()