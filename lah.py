import json
import string
import random
import requests
import urllib2
from BeautifulSoup import BeautifulSoup
headers = {'Accept': 'application/json'}

r = requests.get('https://api.stackexchange.com/2.2/answers?order=desc&sort=activity&site=stackoverflow&filter=withbody')

for i in r.json()['items']:

	identity = i['answer_id']
	soup = BeautifulSoup(i['body'])
	count = 0
	for link in soup.findAll('a'):

		try:
			sock = urllib2.urlopen(link.get("href"))
			newSoup = BeautifulSoup(sock.read())

			for css in newSoup.findAll('link'):
				if css['href'].startswith('http'):
					print "HTTP Link"
				else:
					css['href'] = str(link.get('href')) + css['href']

			for js in newSoup.findAll('script'):
				try:
					if js['src'].startswith('http'):
						print "HTTP link"
					else:
						js['src'] = str(link.get('href')) + js['src']
				except KeyError:
					print "Key Error"

			# randomly make file name
			name = ''.join(random.SystemRandom().choice(string.ascii_uppercase + string.digits) for _ in range(10)) + ".html"
			f = open("lah-api/public/archive/" + name, 'w')
			f.write(str(newSoup))
			f.close()
			sock.close()
			r = requests.post("http://localhost:3000/links", data={"answer_id": identity, "number": count, "archive": name}, headers=headers)

		except:
			print "Nope"

		count = count + 1
