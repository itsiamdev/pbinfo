#include<bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin>>n;
    switch(n%4)
    {
        case 1: cout<<"+"; break;
        case 2: cout<<"---+"; break;
        case 3: cout<<"-+--+";
    }
    for(int i=0;i<n/4;i++)
        cout<<"+--+";
    return 0;
}