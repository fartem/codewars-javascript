const expect = require('chai').expect

const solution = require('../../src/kyu6/stringarrayrevisal').solution

expect(
  solution(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo'])
).to.have.all.members(
  ['codewars', 'picaniny', 'hubububo']
)
expect(
  solution(['abracadabra', 'allottee', 'assessee'])
).to.have.all.members(
  ['abracadabra', 'alote', 'asese']
)
expect(
  solution(['kelless', 'keenness'])
).to.have.all.members(
  ['keles', 'kenes']
)
expect(
  solution(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi'])
).to.have.all.members(
  ['Wolomolo', 'flodoromonlighters', 'chuchchi']
)
expect(
  solution(['adanac', 'soonness', 'toolless', 'ppellee'])
).to.have.all.members(
  ['adanac', 'sones', 'toles', 'pele']
)
expect(
  solution(['callalloo', 'feelless', 'heelless'])
).to.have.all.members(
  ['calalo', 'feles', 'heles']
)
expect(
  solution(['putteellinen', 'keenness'])
).to.have.all.members(
  ['putelinen', 'kenes']
)
expect(
  solution(['kelless', 'voorraaddoosspullen', 'achcha'])
).to.have.all.members(
  ['keles', 'voradospulen', 'achcha']
)
