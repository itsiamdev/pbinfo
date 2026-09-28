#include <iostream>
using namespace std;

int n,k,primp = 0;
int main()
{
  cin>>n;
  for(int x = 1 ; x <= n ; x++)
  {
      cin>>k;
      if(k % 2 == 0 && primp == 0)
          primp = k;
  }
  if(primp != 0)
    cout<<primp;
  else
    cout<<"IMPOSIBIL";
}