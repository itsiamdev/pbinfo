#include <iostream>
using namespace std;

int main()
{
    int n,x,y,p;
    cin>>n>>x>>y>>p;
    int X,Y,U=0,C=0;
    if(p==1)
    {
        for(int i=1;i<=n;++i)
            cin>>X>>Y,U+=X,C+=Y;
        cout<<U<<' '<<C<<' '<<U-C;
    }
    else
    {
        for(int i=1;i<x;++i)
            cin>>X>>Y,U+=X,C+=Y;
        if(U-C>=y)
            cout<<"DA";
        else
            cout<<"NU";
    }
    return 0;
}