#include<iostream>
using namespace std;

int main()
{
    int n,i,rnd,k,s=0;
    cin>>n;
    if(n%5==0)
        rnd=n/5;
    else
        rnd=n/5+1;
    if(rnd==n/5)
        cout<<n/5<<endl<<"DA"<<endl;
    else
        cout<<n/5+1<<endl<<"NU"<<endl;
    k=1;
    while(s<rnd)
    {
        s=s+k;
        k++;
    }
    if(k%2==0)
        cout<<"micsunele";
    else
        cout<<"panselute";


}