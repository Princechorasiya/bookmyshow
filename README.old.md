pages :

Home.Page.jsx;
Movie.Page.jsx;
Play.Page.jsx;

hocs/layour

default.Hoc.jsx;
Movie.Hoc.jsx;

components
cast cast.compponents.jsx;
entertqinment entertqinement.coponents.jsx

herocarosoel herocarousol.components.jsx
arrows.componentw.jsx

movie hero moviehero.components.jsx;
movieinfo.component.jsx

navbar navbar.components.jsx
movieNavbar.component.jsx;

paymentmodal payement.components.jsx;

play filteres filter.component.jsx

poster >>poster.compomnts.jsx

posterSlider PosterSliderComponet.jsx;

tailwind
react-slick

axios(api requests)
headless ui

react-icons

broswerrouter

devops

dev ==>Development Team build the app
ops =>operation team code developed client and app

10% needs devops startups usually large ones go with dual team structure

devops and cicd (docker and kubernetes)
where to host our server not for free

> > > we shut ddown volunatraily so server does burn out

dev --->>>ops

testing falls under ops
write code +share code --->>>testing
not good with coding manual testing

good with coding automated testing we write scripts to test

developer team >>>> operatonTeam >>>testing team

ops
test the code
scale the app
bug fixing
deploy

complexitity increases time to build increases

bda(business analysis not out part )

scenario :
team of 3 (dev team)
all have different os
mac windows linux

person1 person2 person3
(w) (mac) (linux)
(packages)

solution is virtual machine

it works on my machine why doesnt it works it on ur machine

## virtualization

(i could be able to run virtual operating system on my local system)

person 2
local system =mac
virtual = window(person 1 as he is writing the code)

application running on ram temporary (random acesss memory)

gpu graphical processing unit

rom read only memory

different packages work on different systems
some work on windows some work on mac

basic arch :
book my show requirements
any amount of vm each having their specifications
ram 4gb
rom 1tb
gpu 2gb

adv arch:
windows unix
4gb 512 1gb 2gb 256 1gb
running both parallry if one needs 7gb we take 3 from unix and give it to windows and then release it when done

> > > internal resource sharing

this is done with the help of docker

base os
windows
8 gb ram 1tb 2gb

contarization (docker)

window unix
2 256 2 256

base
8 1tb

docker Engine (4gb 512)

book my show needs 3
now docker gives 1 to windows and release it after use

docker >>>>Ec2 instance >>>img and container

kubernetes (orchestra)

> > Nodes master node (person holding stick in orchestra leader)
> > Child nodes(following the lead)
> > nginx light weight servers

aws >>>Ec2 (virtual machines)

docker

> > image
> >
> > > container

image(parent)
container(child) ||server

many server server should not break

client server architecture
3000 port react

8081 port node 0

kubernetes

> > > docker Deamon -->>server(initialization)
> > > docker Client --.client
> > > Docker Swarm >>>brain master node | configuration node

> > master code
> > child node
> > pod()(container)
> > Development(where it will keep close eye on pod)

example run a server with 3 container

docker

> > > image
> > > cont 1
> > > cont 2
> > > cont 3

kubernetes

> > > master is manager (developement is team leader)
> > > child1 |pod1
> > > child2 |pod2
> > > child3 |pod3

developmeent
analyze annd maintain all teh pods //child nodes /server/containers

docker>>>kubernetes

aws and ec2
amazon elsatic computer cloude service

aws >>>Service
ec2 >>Vm

> > unix (we can choose any)
> > base os>>windows
> > client server

                                    kubernetes

server server

nginx light weight server

> > reverse Proxy
> > mulitple proxy and multiple server
> > or multi proxy for server so proxy does not break
> > load balancing

server
(1000 req per hour)==>>>200-300 duplicate/similar request

duplicate request are directed to proxy if proxy doesnt have it sends it to the server
