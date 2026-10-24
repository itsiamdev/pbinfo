#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n,s,x;
    cin>>n;
    if(n<5 || n*(n+1)%3)
    {
        cout<<"NU";
        return 0;
    }
    if((n-9)%6==0)
        s=10,x=(n-9)/6;
    if((n-8)%6==0)
        s=9,x=(n-8)/6;
    if((n-6)%6==0)
        s=7,x=(n-6)/6;
    if((n-5)%6==0)
        s=6,x=(n-5)/6;

    switch(s)
    {
        case 10: cout<<"1 2 3 4 5 "; break;
        case 9: cout<<"1 2 3 6 "; break;
        case 7: cout<<"3 4 "; break;
        case 6: cout<<"5 "; break;
    }

    for(int i=0;i<x;i++)
        cout<<s+6*i<<" "<<s+5+6*i<<" ";
    cout<<'\n';

    switch(s)
    {
        case 10: cout<<"7 8 "; break;
        case 9: cout<<"5 7 "; break;
        case 7: cout<<"2 5 "; break;
        case 6: cout<<"2 3 "; break;
    }

    for(int i=0;i<x;i++)
        cout<<s+1+6*i<<" "<<s+4+6*i<<" ";
    cout<<'\n';

    switch(s)
    {
        case 10: cout<<"6 9 "; break;
        case 9: cout<<"4 8 "; break;
        case 7: cout<<"1 6 "; break;
        case 6: cout<<"1 4 "; break;
    }

    for(int i=0;i<x;i++)
        cout<<s+2+6*i<<" "<<s+3+6*i<<" ";
    cout<<'\n';
    exit(0);
}