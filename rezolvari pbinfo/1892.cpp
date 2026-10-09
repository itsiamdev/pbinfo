#include <iostream>

using namespace std;
int main()
{
    int n,a,i;
    cin>>n;
    a=(n+1)/2;
    for(i=0; i<n; i++)
    {
        if(n%2==0)
        {
            cout<<"NU ESTE NOROCOS";
            break;
        }
        else cout<<a+i<<' ';
    }

    return 0;
}