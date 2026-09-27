#include <iostream>

using namespace std;
int n,k,r;
int main()
{
    cin>>n>>k>>r;
    cout<<n/2<<"\n";
    int p=((k-1)*k)/2; // primul element din submultimea k
    int u=p+k-1;  // ultimul element din submultimea k
    int p1=((r-1)*r)/2; // primul element din submultimea r
    int u1=p1+r-1;  // ultimul element din submultimea r

    cout<<(((u1+1)*u1)/2- (p1*(p1-1))/2+((u+1)*u)/2- (p*(p-1))/2)/(k+r)<<"\n";

    int i=1;
    while(i<=r)
  {
       cout<<p1<<" ";
       i++;
       if(i<=r)
            cout<<p1+1<<" ";
        i++;
        if(i<=r)
            cout<<u1<<" ";
        i++,p1=p1+2,u1--;
  }

    return 0;
}