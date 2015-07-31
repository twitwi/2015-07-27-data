import numpy as np
from matplotlib import pyplot as plt

def one_simulation(iter, step=1):
  def sample(d=2):
    x = np.random.rand(d)
    return np.sum(x**2) < 1
  n,N,res = 0,0,[]
  for i in range(iter):
    N = N+1
    if sample(): n = n+1.0
    if i % step == (step-1):
        res.append(n/N)
  return res

def one_fast_simulation(iter, step=1):
    x = np.random.rand(2, iter)
    x = np.sum(x**2, axis=0)
    x = x < 1
    x = np.cumsum(x) * 1.0 / range(1, iter+1)
    return x[step-1::step]

def test_numpy_vs_loops():
  for dur in [1000, 10000, 20000]:
    print "pure loops", dur
    all = []
    for i in range(20): all.append(one_simulation(dur, 100))
    plt.plot(4*np.array(all).T);plt.show()
    
    print "numpy", dur
    all = []
    for i in range(20): all.append(one_fast_simulation(dur, 100))
    plt.plot(4*np.array(all).T)
    plt.show()

def test_random():
  import random
  N = 300000
  print "classic"
  all1 = []
  random.seed() # to the current time
  for i in range(N):
    #all1.append(random.gauss(0, 1))
    all1.append(random.random())
  print "reseed"
  all2 = []
  for i in range(N):
    random.seed() # to the current time
    #all2.append(random.gauss(0, 1))
    all2.append(random.random())
  print "plot"
  plt.hist([all1, all2], bins=50)
  plt.grid()
  plt.show()

print "Estimating PI, with different ways of simulating random numbers"
test_numpy_vs_loops()
print "Checkin what happens when we reseed the random number generator often (true in Python)"
test_random()

