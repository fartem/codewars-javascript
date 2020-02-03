const expect = require('chai').expect

const removeDuplicates = require('../../src/kyu6/stringarrayrevisal').removeDuplicates

expect(
  removeDuplicates(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
).to.have.all.members(
  ['codewars', 'picaniny', 'hubububo']
)
expect(
  removeDuplicates(['abracadabra', 'allottee', 'assessee'])
).to.have.all.members(
  ['abracadabra', 'alote', 'asese']
)
expect(
  removeDuplicates(['kelless', 'keenness'])
).to.have.all.members(
  ['keles', 'kenes']
)
expect(
  removeDuplicates(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi'])
).to.have.all.members(
  ['Wolomolo', 'flodoromonlighters', 'chuchchi']
)
expect(
  removeDuplicates(['adanac', 'soonness', 'toolless', 'ppellee'])
).to.have.all.members(
  ['adanac', 'sones', 'toles', 'pele']
)
expect(
  removeDuplicates(['callalloo', 'feelless', 'heelless'])
).to.have.all.members(
  ['calalo', 'feles', 'heles']
)
expect(
  removeDuplicates(['putteellinen', 'keenness'])
).to.have.all.members(
  ['putelinen', 'kenes']
)
expect(
  removeDuplicates(['kelless', 'voorraaddoosspullen', 'achcha'])
).to.have.all.members(
  ['keles', 'voradospulen', 'achcha']
)
