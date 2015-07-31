# 2015-07-27-data
Data repository for the 2015-07-27-cern-webfest software carpentry workshop.

`data/`: shell-novice data
`python/data/`: python-novice-inflammation data
`d3/`: things for the html/css/javascript/d3 lesson

View you creations at: <http://twitwi.github.io/2015-07-27-data/>

View the contribution graph at: <https://github.com/twitwi/2015-07-27-data/network>







The index.md file has been generated with:

    find -name \*.html | awk '{print "- <" $0 ">"}' > index.md
    pandoc index.md  -t html --standalone -o index.html    
