#include <iostream>
#include <cmath>
using namespace std;
long long t1,t2,i,n,k;
int main()
{
    cin>>n;
    for(i=1;i*(i+1)/2<=n;i++)
    {
        t1=i*(i+1)/2;
        t2=n-t1;
        k=sqrt(2*t2);
        if(k*(k+1)==2*t2&&t2>0&&t1>0)
        {
            cout<<t1<<" "<<t2;
            return 0;
        }
    }
    cout<<"NU";
    return 0;
}