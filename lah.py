import json
import string
import random
import requests
import urllib2
import imghdr
import time
import tldextract
from BeautifulSoup import BeautifulSoup
headers = {'Accept': 'application/json'}
url = "http://4b4084d9.ngrok.io/"

while True:
	r = requests.get('https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody')

	for i in r.json()['items']:

		identity = i['answer_id']
		soup = BeautifulSoup(i['body'])
		count = 0
		for link in soup.findAll('a'):
			ext = tldextract.extract(str(link.get('href')))
			try:
				sock = urllib2.urlopen(link.get("href"))
				newSoup = BeautifulSoup(sock.read())

				if ext.subdomain != "":
					link = "http://" + ext.subdomain + "." + ext.domain + "." + ext.suffix
				else:
					link = "http://" + ext.domain + "." + ext.suffix

				for css in newSoup.findAll('link'):
					if css.get('href').startswith('/'):
						css['href'] = str(link) + css.get('href')
					else:
						print "Nope"

				for js in newSoup.findAll('script'):
					try:
						if js.get('src').startswith('/'):
							js['src'] = str(link) + js.get('src')
						else:
							print "Nope"
					except KeyError:
						print "Key Error"

				for a in newSoup.findAll('a'):
					if a.get('href').startswith('/'):
						a['href'] = str(link) + a.get('href')
					else:
						print "Nope"

				name = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(10)) + ".html"
				r = requests.post(url + "links", data={"answer_id": identity, "number": count, "archive": name}, headers=headers)
				if r.status_code == 201:
				# randomly make file name
				#print imghdr.what(str(newSoup))
					f = open("lah-api/public/archive/" + name, 'w')
					f.write(str(newSoup))
					f.close()
				sock.close()

			except:
				print "Nope"

			count = count + 1
	time.sleep(60)
