#include <iostream>
using namespace std;

int main()
{
    int n;
    cin>>n;
    int x,Max=0;
    for(int i=0;i<n/2;++i)
        cin>>x,Max=max(x,Max);
    int nr=0;
    for(int i=0;i<n/2;++i)
        cin>>x,(x>Max)?++nr:0;
    cout<<nr;
    return 0;
}