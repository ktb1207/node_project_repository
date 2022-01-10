import dns from 'dns';


dns.reverse('104.20.23.46', (err, hostname) => {
  if (err) console.log(err)
  console.log(hostname) 
})